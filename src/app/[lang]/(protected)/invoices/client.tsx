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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Invoice, invoices } from "./mocks";
import { PageHeader } from "@/components/ui/page-header";
import { Dictionary } from "@/dictionaries";

interface InvoiceDashboardClientProps {
  dict: Dictionary;
}

export function InvoiceDashboardClient({ dict }: InvoiceDashboardClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Function to get the appropriate badge color based on status
  const getStatusBadge = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="pointer-events-none border-green-600 bg-green-50 text-green-600 dark:bg-green-600 dark:text-green-50">
            {dict.invoices.statuses.paid}
          </Badge>
        );
      case "pending":
        return (
          <Badge className="pointer-events-none border-amber-600 bg-amber-50 text-amber-600 dark:bg-amber-600 dark:text-amber-50">
            {dict.invoices.statuses.pending}
          </Badge>
        );
      case "overdue":
        return (
          <Badge className="pointer-events-none border-red-600 bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-50">
            {dict.invoices.statuses.overdue}
          </Badge>
        );
      default:
        status satisfies never;
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <PageHeader
            title={dict.invoices.title}
            description={dict.invoices.description}
          />
          <Card className="w-full overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">
                    {dict.invoices.export}
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">
                    {dict.invoices.newInvoice}
                  </span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 pb-4">
                <div className="relative flex-1">
                  <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder={dict.invoices.searchPlaceholder}
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto flex gap-1">
                      <span>{dict.invoices.status}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>
                      {dict.invoices.statuses.all}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {dict.invoices.statuses.paid}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {dict.invoices.statuses.pending}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {dict.invoices.statuses.overdue}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="overflow-auto">
                <div className="min-w-full rounded-md border">
                  <Table className="overflow-x-auto">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[120px]">
                          {dict.invoices.date}
                        </TableHead>
                        <TableHead>{dict.invoices.recipient}</TableHead>
                        <TableHead>{dict.invoices.invoiceNumber}</TableHead>
                        <TableHead className="text-right">
                          {dict.invoices.amount}
                        </TableHead>
                        <TableHead>{dict.invoices.status}</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInvoices.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            {dict.invoices.noInvoicesFound}
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
                                    <span className="sr-only">
                                      {dict.invoices.actions}
                                    </span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>
                                    {dict.invoices.actions}
                                  </DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    {dict.invoices.download}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Printer className="mr-2 h-4 w-4" />
                                    {dict.invoices.print}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    {dict.invoices.email}
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash className="mr-2 h-4 w-4" />
                                    {dict.invoices.delete}
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
                  {dict.invoices.showing}{" "}
                  <strong>{filteredInvoices.length}</strong> {dict.invoices.of}{" "}
                  <strong>{invoices.length}</strong>{" "}
                  {dict.invoices.invoicesLower}
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    {dict.invoices.previous}
                  </Button>
                  <Button variant="outline" size="sm">
                    {dict.invoices.next}
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
