"use client";

import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Component imports for each section
import ComboboxDemo from "@/components/demos/combobox-demo";
import DataTableDemo from "@/components/demos/data-table-demo";
import DatePickerDemo from "@/components/demos/date-picker-demo";
import DialogDemo from "@/components/demos/dialog-demo";
import DrawerDemo from "@/components/demos/drawer-demo";
import DropdownMenuDemo from "@/components/demos/dropdown-menu-demo";
import InputDemo from "@/components/demos/input-demo";
import InputOTPDemo from "@/components/demos/input-otp-demo";
import NavigationMenuDemo from "@/components/demos/navigation-menu-demo";
import PaginationDemo from "@/components/demos/pagination-demo";
import PopoverDemo from "@/components/demos/popover-demo";
import RadioGroupDemo from "@/components/demos/radio-group-demo";

const componentMap: Record<string, React.ComponentType> = {
  combobox: ComboboxDemo,
  "data-table": DataTableDemo,
  "date-picker": DatePickerDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  input: InputDemo,
  "input-otp": InputOTPDemo,
  "navigation-menu": NavigationMenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  "radio-group": RadioGroupDemo,
};

const componentTitles: Record<string, string> = {
  combobox: "Combobox",
  "data-table": "Data Table",
  "date-picker": "Date Picker",
  dialog: "Dialog",
  drawer: "Drawer",
  "dropdown-menu": "Dropdown Menu",
  input: "Input",
  "input-otp": "Input OTP",
  "navigation-menu": "Navigation Menu",
  pagination: "Pagination",
  popover: "Popover",
  "radio-group": "Radio Group",
};

export default function Page() {
  const [activeComponent, setActiveComponent] = React.useState("combobox");

  const ActiveComponent = componentMap[activeComponent] || ComboboxDemo;
  const activeTitle = componentTitles[activeComponent] || "Combobox";

  return (
    <SidebarProvider>
      <AppSidebar
        activeComponent={activeComponent}
        onComponentChange={setActiveComponent}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Shadcn components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{activeTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <ActiveComponent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
