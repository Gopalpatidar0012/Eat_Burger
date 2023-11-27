// pages/items.js
import Image from "next/image";
import { useRouter } from "next/router";
import image from "../../public/assets/images/advertisment.jpg";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/components/Pagination";

// pages/api/data.js
const data = [
  { id: 1, name: "/assets/images/ecommerce.jpg" },
  { id: 2, name: "/assets/images/ecommerce.jpg" },
  { id: 3, name: "/assets/images/ecommerce.jpg" },
  { id: 4, name: "/assets/images/Ai.jpg" },
  { id: 5, name: "/assets/images/ecommerce.jpg" },
  { id: 6, name: "/assets/images/ecommerce.jpg" },
  { id: 7, name: "/assets/images/advertisment.jpg" },
  { id: 8, name: "/assets/images/ecommerce.jpg" },
  { id: 9, name: "/assets/images/ecommerce.jpg" },
  { id: 10, name: "/assets/images/ecommerce.jpg" },
  { id: 11, name: "/assets/images/ecommerce.jpg" },
  { id: 12, name: "/assets/images/ecommerce.jpg" },
  { id: 13, name: "/assets/images/ecommerce.jpg" },
  { id: 14, name: "/assets/images/ecommerce.jpg" },
  { id: 15, name: "/assets/images/ecommerce.jpg" },
  { id: 16, name: "/assets/images/ecommerce.jpg" },
  { id: 17, name: "/assets/images/ecommerce.jpg" },
  { id: 18, name: "/assets/images/ecommerce.jpg" },
  { id: 19, name: "/assets/images/ecommerce.jpg" },
  { id: 20, name: "/assets/images/ecommerce.jpg" },
  { id: 21, name: "/assets/images/ecommerce.jpg" },
  { id: 22, name: "/assets/images/ecommerce.jpg" },
  { id: 23, name: "/assets/images/ecommerce.jpg" },
  { id: 24, name: "/assets/images/ecommerce.jpg" },

  // Add more items
];

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] || 1;
  const per_page = searchParams["per_page"] || 10;
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const items = data.slice(start, end);

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {items.map((item) => (
            <div key={item.id}>
              <Image src={item.name} alt="image" width={300} height={300} />
            </div>
          ))}
        </div>
        <Pagination hasNextPage={end < data.length} hasPrevPage={start > 0} />
      </div>
      {/* <div className='flex flex-col items-center justify-center border p-8'>
        <div className='flex w-full gap-8 '>
          {items.map((item) => (
            <div key={item.id}>
              <Image src={item.name} alt='image' width={300} height={300} />
            </div>
          ))}
        </div>
        <Pagination hasNextPage={end < data.length} hasPrevPage={start > 0} />
      </div> */}
    </div>
  );
};

export default page;
