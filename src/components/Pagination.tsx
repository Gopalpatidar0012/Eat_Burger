"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Pagination = ({
  hasNextPage,
  hasPrevPage,
}: {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || 1;
  const per_page = searchParams?.get("per_page") || 10;

  return (
    <div className="flex gap-8">
      {hasPrevPage ? (
        <Link
          href={`/pageee/?page=${Number(page) - 1}&per_page=${per_page}`}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          Previous
        </Link>
      ) : (
        <span className=" curs cursor-not-allowed rounded bg-gray px-4 py-2 text-white">
          Previous
        </span>
      )}
      <div className="flex items-center justify-center gap-2">
        <p className="border bg-orange-400 px-2">{page}</p>/
        <p className="border bg-orange-400 px-2">
          {Math.ceil(10 / Number(per_page))}
        </p>
      </div>
      {hasNextPage ? (
        <Link
          href={`/pageee/?page=${Number(page) + 1}&per_page=${per_page}`}
          className="rounded bg-green-500 px-8 py-2 text-white"
        >
          Next
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded bg-gray px-8 py-2 text-white">
          Next
        </span>
      )}
    </div>
  );
};

export default Pagination;
