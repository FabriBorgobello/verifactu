"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Download,
  Printer,
  Mail,
  Trash,
  Search,
  Plus,
  ChevronDown,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data for invoices
const invoices = [
  {
    id: "INV-0001",
    date: new Date("2023-01-15"),
    recipient: "Acme Corp",
    amount: 1250.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0002",
    date: new Date("2023-02-03"),
    recipient: "Globex Industries",
    amount: 3450.75,
    currency: "EUR",
    status: "pending",
  },
  {
    id: "INV-0003",
    date: new Date("2023-02-15"),
    recipient: "Stark Enterprises",
    amount: 5000.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0004",
    date: new Date("2023-03-01"),
    recipient: "Wayne Industries",
    amount: 2750.5,
    currency: "EUR",
    status: "overdue",
  },
  {
    id: "INV-0005",
    date: new Date("2023-03-10"),
    recipient: "Umbrella Corporation",
    amount: 1800.25,
    currency: "EUR",
    status: "pending",
  },
  {
    id: "INV-0006",
    date: new Date("2023-03-22"),
    recipient: "Oscorp",
    amount: 4200.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0007",
    date: new Date("2023-04-05"),
    recipient: "LexCorp",
    amount: 3100.75,
    currency: "EUR",
    status: "overdue",
  },
  {
    id: "INV-0008",
    date: new Date("2023-04-18"),
    recipient: "Cyberdyne Systems",
    amount: 2900.5,
    currency: "EUR",
    status: "pending",
  },
];

export default function InvoiceDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Function to get the appropriate badge color based on status
  const getStatusBadge = (status: (typeof invoices)[number]["status"]) => {
    switch (status) {
      case "paid":
        return (
          <Badge
            variant="secondary"
            className="pointer-events-none bg-green-500"
          >
            Paid
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="outline"
            className="pointer-events-none border-amber-600 text-amber-600"
          >
            Pending
          </Badge>
        );
      case "overdue":
        return (
          <Badge variant="destructive" className="pointer-events-none">
            Overdue
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="pointer-events-none">
            {status}
          </Badge>
        );
    }
  };

  // Function to format currency
  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    });
    return formatter.format(amount);
  };

  return (
    <div className="bg-muted/40 flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <Card className="w-full overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="grid gap-1">
                <CardTitle>Invoices</CardTitle>
                <CardDescription>
                  Manage and track your invoices
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">Export</span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">New Invoice</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 pb-4">
                <div className="relative flex-1">
                  <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search invoices..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto flex gap-1">
                      <span>Status</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Paid</DropdownMenuItem>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuItem>Overdue</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="overflow-auto">
                <div className="min-w-full rounded-md border">
                  <Table className="overflow-x-auto">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[120px]">Date</TableHead>
                        <TableHead>Recipient</TableHead>
                        <TableHead>Invoice Number</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInvoices.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            No invoices found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredInvoices.map((invoice) => (
                          <TableRow key={invoice.id}>
                            <TableCell className="font-medium">
                              {format(invoice.date, "MMM d, yyyy")}
                            </TableCell>
                            <TableCell>{invoice.recipient}</TableCell>
                            <TableCell>{invoice.id}</TableCell>
                            <TableCell className="text-right">
                              {formatCurrency(invoice.amount, invoice.currency)}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(invoice.status)}
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
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Printer className="mr-2 h-4 w-4" />
                                    Print
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email
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
                  Showing <strong>{filteredInvoices.length}</strong> of{" "}
                  <strong>{invoices.length}</strong> invoices
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
