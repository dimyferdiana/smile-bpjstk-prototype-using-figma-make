import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Building, Briefcase, Target } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import Smile from '../imports/Smile-2025-401';

interface Team {
  id: string;
  name: string;
  icon: React.ReactNode;
  shortcut?: string;
}

interface TeamSwitcherProps {
  onAddTeam?: () => void;
}

export function TeamSwitcher({ onAddTeam }: TeamSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Teams data with the new Smile logo for the active team
  const teams: Team[] = [
    {
      id: 'main',
      name: 'Smile',
      icon: <div className="w-full h-full"><Smile /></div>,
    },
    {
      id: 'design',
      name: 'Design Team',
      icon: <Target className="w-4 h-4" />,
      shortcut: '⌘1'
    },
    {
      id: 'development',
      name: 'Development Team',
      icon: <Briefcase className="w-4 h-4" />,
      shortcut: '⌘2'
    },
    {
      id: 'marketing',
      name: 'Marketing Team',
      icon: <Building className="w-4 h-4" />,
      shortcut: '⌘3'
    }
  ];

  const [activeTeam] = useState<Team>(teams[0]);

  const handleTeamSelect = (team: Team) => {
    // Handle team selection logic here
    console.log('Selected team:', team.name);
    setIsOpen(false);
  };

  const handleAddTeam = () => {
    if (onAddTeam) {
      onAddTeam();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button className="w-full flex items-center justify-between p-3 hover:bg-sidebar-accent rounded-lg transition-colors group border border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[rgba(8,37,54,0)] rounded-lg flex items-center justify-center text-sidebar">
                {activeTeam.icon}
              </div>
              <div className="text-left">
                <div className="font-medium text-sidebar-foreground text-sm">
                  {activeTeam.name}
                </div>
              </div>
            </div>
            <div className="text-sidebar-foreground/60">
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="team-switcher-dropdown">
          <div className="bg-sidebar border border-sidebar-border rounded-lg shadow-lg py-2">
            {/* Team List */}
            <div className="px-2">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => handleTeamSelect(team)}
                  className="w-full flex items-center justify-between p-2 hover:bg-sidebar-accent rounded-md transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sidebar-accent rounded-md flex items-center justify-center text-sidebar-accent-foreground">
                      {team.id === 'main' ? (
                        <div className="w-full h-full">
                          <Smile />
                        </div>
                      ) : (
                        team.icon
                      )}
                    </div>
                    <span className="text-sm text-sidebar-foreground">
                      {team.name}
                    </span>
                  </div>
                  {team.shortcut && (
                    <span className="text-xs text-sidebar-foreground/60 font-mono">
                      {team.shortcut}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-sidebar-border my-2" />

            {/* Add Team Option */}
            <div className="px-2">
              <button
                onClick={handleAddTeam}
                className="w-full flex items-center gap-3 p-2 hover:bg-sidebar-accent rounded-md transition-colors text-left"
              >
                <div className="w-6 h-6 bg-sidebar-accent rounded-md flex items-center justify-center text-sidebar-accent-foreground">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-sm text-sidebar-foreground">
                  Add team
                </span>
              </button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}