import React from "react";
import Navbar from "./AdminComponent/Navbar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";

const page = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Navbar />
        </div>
        <div>
          <section>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4 w-full bg-slate-200 font-josefin p-2 rounded-xl">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-8 px-16 rounded shadow border border-gray-300">
                  <h3 className="font-bold font-josefin">Total Sales</h3>
                  <p>$24,000</p>
                </div>
                <div className="bg-white p-8 px-16 rounded shadow border border-gray-300">
                  <h3 className="font-bold font-josefin">Total Users</h3>
                  <p>1,200</p>
                </div>
                <div className="bg-white p-8 px-16 rounded shadow border border-gray-300">
                  <h3 className="font-bold font-josefin">Total Products</h3>
                  <p>150</p>
                </div>
                <div className="bg-white p-8 px-16 rounded shadow border border-gray-300">
                  <h3 className="font-bold font-josefin">Monthly Revenue</h3>
                  <p>$6,000</p>
                </div>
              </div>
            </div>
          </section>
          <section className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead className="min-w-[150px]">Users</TableHead>
                  <TableHead className="text-right">Role</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Olivia Martin</TableCell>
                  <TableCell className="text-right">$42.25</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Shipped
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
      </div>
    </>
  );
};

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
export default page;
