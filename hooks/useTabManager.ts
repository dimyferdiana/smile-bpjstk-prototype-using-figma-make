import { useState, useCallback } from 'react';

export interface Tab {
  id: string;
  title: string;
  closeable: boolean;
}

const TAB_MAPPING: Record<string, string> = {
  'Components': 'components',
  'Memo Pencairan Anggaran': 'memo-pencairan-anggaran',
  'Colors': 'colors',
  'Color System': 'colors',
  'Typography': 'typography',
  'Custom Components': 'custom-components',
  'Layout': 'layout',
  'Interactions': 'interactions',
  'Beranda': 'beranda',
  'Design System': 'design-system-hub'
};

export function useTabManager() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'beranda', title: 'Beranda', closeable: false }
  ]);

  const addNewTab = useCallback((title: string, tabType?: string) => {
    // Use provided tabType or try to map from title
    const mappedTabId = tabType || TAB_MAPPING[title];
    
    if (mappedTabId) {
      const existingTab = tabs.find(tab => tab.id === mappedTabId);
      if (existingTab) {
        setActiveTab(existingTab.id);
        return;
      }
    }

    const newTabId = mappedTabId || `tab-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const existingTab = tabs.find(tab => tab.title === title);
    
    if (existingTab) {
      setActiveTab(existingTab.id);
    } else {
      const newTab: Tab = {
        id: newTabId,
        title: title,
        closeable: newTabId !== 'beranda' // Beranda tab is never closeable
      };
      setTabs(prevTabs => [...prevTabs, newTab]);
      setActiveTab(newTabId);
    }
  }, [tabs]);

  const handleTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  const handleTabClose = useCallback((tabId: string) => {
    const updatedTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(updatedTabs);
    
    if (activeTab === tabId && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  }, [tabs, activeTab]);

  return {
    activeTab,
    tabs,
    addNewTab,
    handleTabClick,
    handleTabClose
  };
}