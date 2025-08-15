import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
// import Link from 'next/link';
import posts from '../../../data/post';
import { Post } from '../../../types/post';

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // Sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className='bg-white p-4 rounded-3xl'>
      <h3 className='text-lg mb-4 font-semibold font-Ruska '>{title ? title : 'Flight Status'}</h3>
      <Table>
        <TableCaption>A list of recent posts</TableCaption>
      
        <TableHeader>
  <TableRow className="bg-background border-none ">
    <TableHead className="rounded-tl-3xl rounded-bl-3xl p-4">Flight ID</TableHead>
    <TableHead >Booking Date</TableHead>
    <TableHead className="text-right">Take-off time</TableHead>
    <TableHead className="rounded-tr-3xl rounded-br-3xl">Arrival Time</TableHead>
  </TableRow>
</TableHeader>

        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id} className="mt-4 first:border-t-0">
              <TableCell className="py-4">{post.title}</TableCell>
              <TableCell className='table-cell py-4'>
                {post.author}
              </TableCell>
              <TableCell className='text-right table-cell p-4'>
                {post.date}
              </TableCell>
              <TableCell className='table-cell p-4'>
                
                 Success
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;