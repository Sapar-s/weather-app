export function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`}></div>;
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[215px] w-[400px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-5 w-[250px]" />
        <Skeleton className="h-4 w-[280px]" />
      </div>
      <Skeleton className="h-[205px] w-[400px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}
