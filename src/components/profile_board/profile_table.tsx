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
        <Table className="border-separate border-spacing-y-3 border-0">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead>username</TableHead>
            <TableHead>Sign-up date</TableHead>
            <TableHead>Total Refered</TableHead>
            <TableHead>Current Rank</TableHead>
             <TableHead>Badge</TableHead>
         

          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-xs">
            <TableCell>Davidson John</TableCell>
            <TableCell>zx7671xx</TableCell>
            <TableCell> Oct 24,2025 - 4:45pm</TableCell>
            <TableCell>Oct 24,2025 - 4:45pm</TableCell>
             <TableCell>+300</TableCell>
           
          </TableRow>
             <TableRow className="text-xs">
            <TableCell>Davidson John</TableCell>
            <TableCell>zx7671xx</TableCell>
            <TableCell> Oct 24,2025 - 4:45pm</TableCell>
            <TableCell>Oct 24,2025 - 4:45pm</TableCell>
             <TableCell>+300</TableCell>
          
          </TableRow>
        </TableBody>
      </Table>
     );
}
 
export default ProfileTag;