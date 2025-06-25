// Simple IndexedDB wrapper for memo data persistence
export interface MemoRecord {
  id: string;
  name: string;
  description: string;
  amount: number;
  status: string;
  priority: string;
  requestDate: string;
  type: string;
  department: string;
  approvedBy: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

class MemoDatabase {
  private dbName = 'MemoDatabase';
  private version = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        console.error('Failed to open database:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('Database initialized successfully');
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = request.result;
        
        // Create memo store if it doesn't exist
        if (!db.objectStoreNames.contains('memos')) {
          const store = db.createObjectStore('memos', { keyPath: 'id' });
          
          // Create indexes for better querying
          store.createIndex('type', 'type', { unique: false });
          store.createIndex('status', 'status', { unique: false });
          store.createIndex('priority', 'priority', { unique: false });
          store.createIndex('department', 'department', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
          
          console.log('Database schema created');
        }
      };
    });
  }

  async getAllMemos(): Promise<MemoRecord[]> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readonly');
      const store = transaction.objectStore('memos');
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result || []);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async getMemosByType(type: string): Promise<MemoRecord[]> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readonly');
      const store = transaction.objectStore('memos');
      const index = store.index('type');
      const request = index.getAll(type);

      request.onsuccess = () => {
        resolve(request.result || []);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async getMemo(id: string): Promise<MemoRecord | null> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readonly');
      const store = transaction.objectStore('memos');
      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async addMemo(memo: Omit<MemoRecord, 'createdAt' | 'updatedAt'>): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    const now = new Date().toISOString();
    const fullMemo: MemoRecord = {
      ...memo,
      createdAt: now,
      updatedAt: now
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readwrite');
      const store = transaction.objectStore('memos');
      const request = store.add(fullMemo);

      request.onsuccess = () => {
        console.log('Memo added to database:', fullMemo.id);
        resolve();
      };

      request.onerror = () => {
        console.error('Failed to add memo:', request.error);
        reject(request.error);
      };
    });
  }

  async updateMemo(memo: Omit<MemoRecord, 'createdAt' | 'updatedAt'>): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    // Get existing memo to preserve createdAt
    const existing = await this.getMemo(memo.id);
    if (!existing) {
      throw new Error('Memo not found');
    }

    const updatedMemo: MemoRecord = {
      ...memo,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString()
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readwrite');
      const store = transaction.objectStore('memos');
      const request = store.put(updatedMemo);

      request.onsuccess = () => {
        console.log('Memo updated in database:', updatedMemo.id);
        resolve();
      };

      request.onerror = () => {
        console.error('Failed to update memo:', request.error);
        reject(request.error);
      };
    });
  }

  async deleteMemo(id: string): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readwrite');
      const store = transaction.objectStore('memos');
      const request = store.delete(id);

      request.onsuccess = () => {
        console.log('Memo deleted from database:', id);
        resolve();
      };

      request.onerror = () => {
        console.error('Failed to delete memo:', request.error);
        reject(request.error);
      };
    });
  }

  async clearAllMemos(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['memos'], 'readwrite');
      const store = transaction.objectStore('memos');
      const request = store.clear();

      request.onsuccess = () => {
        console.log('All memos cleared from database');
        resolve();
      };

      request.onerror = () => {
        console.error('Failed to clear memos:', request.error);
        reject(request.error);
      };
    });
  }

  async seedDummyData(): Promise<void> {
    // Check if we already have data
    const existingMemos = await this.getAllMemos();
    if (existingMemos.length > 0) {
      console.log('Database already contains data, skipping seed');
      return;
    }

    console.log('Seeding database with dummy data...');
    
    const categories = [
      'Klaim Langsung',
      'Persekot Kerja', 
      'Termin',
      'Beban Investasi',
      'Anggaran Terpusat',
      'BYMHD'
    ];

    const statuses = ['Draft', 'Pending', 'Approved', 'Rejected', 'Completed'];
    const priorities = ['Low', 'Medium', 'High', 'Urgent', 'Critical'];
    const departments = ['Finance', 'Human Resources', 'Information Technology', 'Operations', 'Marketing', 'Legal', 'Procurement'];

    // Generate 20 records per category
    for (const category of categories) {
      for (let i = 1; i <= 20; i++) {
        const memo: Omit<MemoRecord, 'createdAt' | 'updatedAt'> = {
          id: `${category.replace(/\s+/g, '').toUpperCase()}-${Date.now()}-${i}`,
          name: `${category} Request ${i}`,
          description: `This is a sample ${category.toLowerCase()} request for testing purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          amount: Math.floor(Math.random() * 10000000) + 100000, // 100K - 10M IDR
          status: statuses[Math.floor(Math.random() * statuses.length)],
          priority: priorities[Math.floor(Math.random() * priorities.length)],
          requestDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Last 30 days
          type: category,
          department: departments[Math.floor(Math.random() * departments.length)],
          approvedBy: Math.random() > 0.5 ? 'John Doe' : '',
          notes: Math.random() > 0.5 ? 'Additional notes for this memo request.' : ''
        };

        await this.addMemo(memo);
      }
    }

    console.log('Database seeded successfully with dummy data');
  }
}

// Export singleton instance
export const memoDatabase = new MemoDatabase();

// Initialize database when module loads
memoDatabase.init().catch(console.error);