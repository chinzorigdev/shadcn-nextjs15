"use client";

import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Shadcn components",
      url: "#",
      items: [
        {
          title: "Combobox",
          key: "combobox",
        },
        {
          title: "Data Table",
          key: "data-table",
        },
        {
          title: "Date Picker",
          key: "date-picker",
        },
        {
          title: "Dialog",
          key: "dialog",
        },
        {
          title: "Drawer",
          key: "drawer",
        },
        {
          title: "Dropdown Menu",
          key: "dropdown-menu",
        },
        {
          title: "Input",
          key: "input",
        },
        {
          title: "Input OTP",
          key: "input-otp",
        },
        {
          title: "Navigation Menu",
          key: "navigation-menu",
        },
        {
          title: "Pagination",
          key: "pagination",
        },
        {
          title: "Popover",
          key: "popover",
        },
        {
          title: "Radio Group",
          key: "radio-group",
        },
      ],
    },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeComponent: string;
  onComponentChange: (component: string) => void;
}

export function AppSidebar({
  activeComponent,
  onComponentChange,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={activeComponent === item.key}
                      onClick={() => onComponentChange(item.key)}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
