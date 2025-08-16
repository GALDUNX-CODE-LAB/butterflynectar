
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProfileTag = () => {
    return ( 
      <div className="rounded-3xl bg-white p-5">
        <h1 className="mb-3 text-lg font-Ruska font-bold">Flight Status</h1>

      <Table className="border-separate border-spacing-y-4 border-0 w-full">
  <TableCaption>A list of your recent invoices.</TableCaption>
  
 <TableHeader>
  <TableRow className="bg-background border-none ">
    <TableHead className="rounded-tl-3xl rounded-bl-3xl p-4">Flight ID</TableHead>
    <TableHead >Booking Date</TableHead>
    <TableHead >Take-off time</TableHead>
    <TableHead >Arival Time</TableHead>
    <TableHead >Route</TableHead>
    <TableHead >Ticket Price</TableHead>
    <TableHead className="rounded-tr-3xl rounded-br-3xl">Status</TableHead>
  </TableRow>
</TableHeader>

  <TableBody>
     <TableRow  className="mt-4">
      <TableCell className="flex items-center gap-2 p-4">
        <input type="checkbox" className="accent-[#5849EF]" /> #001675
      </TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Lagos - Paris</TableCell>
      <TableCell className="p-4">$5,000</TableCell>
      <TableCell className="p-4">Success</TableCell>
    </TableRow>
 
       <TableRow  className="mt-4">
      <TableCell className="flex items-center gap-2 p-4">
        <input type="checkbox" className="accent-[#5849EF]" /> #001675
      </TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Lagos - Paris</TableCell>
      <TableCell className="p-4">$5,000</TableCell>
      <TableCell className="p-4">Success</TableCell>
    </TableRow>
       <TableRow  className="mt-4">
      <TableCell className="flex items-center gap-2 p-4">
        <input type="checkbox" className="accent-[#5849EF]" /> #001675
      </TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Oct 24,2025 - 4:45pm</TableCell>
      <TableCell className="p-4">Lagos - Paris</TableCell>
      <TableCell className="p-4">$5,000</TableCell>
      <TableCell className="p-4">Success</TableCell>
    </TableRow>
     
  </TableBody>
</Table>

      </div>
        
     );
}
 
export default ProfileTag;

