"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Download,
  Receipt,
  Mail,
  Trash,
  Search,
  Plus,
  ChevronDown,
  Tag,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Expense, expenses } from "./mocks";
import { PageHeader } from "@/components/ui/page-header";

export default function ExpenseDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Function to get the appropriate badge color based on status
  const getStatusBadge = (status: Expense["status"]) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="pointer-events-none border-green-600 bg-green-50 text-green-600 dark:bg-green-600 dark:text-green-50">
            Approved
          </Badge>
        );
      case "pending":
        return (
          <Badge className="pointer-events-none border-amber-600 bg-amber-50 text-amber-600 dark:bg-amber-600 dark:text-amber-50">
            Pending
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="pointer-events-none border-red-600 bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-50">
            Rejected
          </Badge>
        );
      default:
        status satisfies never;
    }
  };

  // Function to get the appropriate badge color based on category
  const getCategoryBadge = (category: Expense["category"]) => {
    const colors = {
      travel:
        "bg-blue-50 text-blue-600 border-blue-600 dark:bg-blue-600 dark:text-blue-50",
      office:
        "bg-purple-50 text-purple-600 border-purple-600 dark:bg-purple-600 dark:text-purple-50",
      meals:
        "bg-orange-50 text-orange-600 border-orange-600 dark:bg-orange-600 dark:text-orange-50",
      supplies:
        "bg-cyan-50 text-cyan-600 border-cyan-600 dark:bg-cyan-600 dark:text-cyan-50",
      other:
        "bg-gray-50 text-gray-600 border-gray-600 dark:bg-gray-600 dark:text-gray-50",
    };

    return (
      <Badge className={`pointer-events-none ${colors[category]}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <PageHeader
            title="Expenses"
            description="Manage and track your expenses"
          />
          <Card className="w-full overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">Export</span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">New Expense</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 pb-4">
                <div className="relative flex-1">
                  <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search expenses..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto flex gap-1">
                      <span>Category</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Travel</DropdownMenuItem>
                    <DropdownMenuItem>Office</DropdownMenuItem>
                    <DropdownMenuItem>Meals</DropdownMenuItem>
                    <DropdownMenuItem>Supplies</DropdownMenuItem>
                    <DropdownMenuItem>Other</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto flex gap-1">
                      <span>Status</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Approved</DropdownMenuItem>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuItem>Rejected</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="overflow-auto">
                <div className="min-w-full rounded-md border">
                  <Table className="overflow-x-auto">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[120px]">Date</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead>Expense ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredExpenses.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="h-24 text-center">
                            No expenses found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredExpenses.map((expense) => (
                          <TableRow key={expense.id}>
                            <TableCell className="font-medium">
                              {format(expense.date, "MMM d, yyyy")}
                            </TableCell>
                            <TableCell>{expense.merchant}</TableCell>
                            <TableCell>{expense.id}</TableCell>
                            <TableCell>
                              {getCategoryBadge(expense.category)}
                            </TableCell>
                            <TableCell className="text-right">
                              {formatCurrency(expense.amount, expense.currency)}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(expense.status)}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Receipt className="mr-2 h-4 w-4" />
                                    View Receipt
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Tag className="mr-2 h-4 w-4" />
                                    Change Category
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">
                  Showing <strong>{filteredExpenses.length}</strong> of{" "}
                  <strong>{expenses.length}</strong> expenses
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
