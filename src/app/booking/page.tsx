"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Booking = () => {
  return (
    <div className="transition-all ease-in-out duration-700 ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div>
          <h1 className=" text-2xl lg:text-4xl font-bold font-Ruska mb-7">HEY THERE, SHERIFF</h1>
        </div>
        <div className="w-full md:w-[25%]">
          <div className="bg-white pt-5 pb-2 px-3 rounded-2xl">
            <h3 className="text-shared">Total Bookings</h3>
            <div className="flex items-center gap-5 mt-3">
              <h1 className="text-3xl font-bold font-Ruska">20</h1>
              <span className="text-sm"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-5 rounded-2xl  p-5">
        <h1 className="text-lg font-bold font-Ruska mb-2">Booking Summary</h1>
        <Table className="border-separate border-spacing-y-3 border-0">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead>Passenger Name</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead>Date booked</TableHead>
              <TableHead>Ticket No</TableHead>
              <TableHead>Explorer Nectar</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Ticked Cost</TableHead>
              <TableHead>Airline</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-xs">
              <TableCell>Davidson John</TableCell>
              <TableCell>zx7671xx</TableCell>
              <TableCell> Oct 24,2025 - 4:45pm</TableCell>
              <TableCell>Oct 24,2025 - 4:45pm</TableCell>
              <TableCell>+300</TableCell>
              <TableCell>Lagos - Abuja</TableCell>
              <TableCell>+300</TableCell>
              <TableCell>Emirates</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Confirmed</TableCell>
            </TableRow>
            <TableRow className="text-xs">
              <TableCell>Davidson John</TableCell>
              <TableCell>zx7671xx</TableCell>
              <TableCell> Oct 24,2025 - 4:45pm</TableCell>
              <TableCell>Oct 24,2025 - 4:45pm</TableCell>
              <TableCell>+300</TableCell>
              <TableCell>Lagos - Abuja</TableCell>
              <TableCell>+300</TableCell>
              <TableCell>Emirates</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Confirmed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Booking;
