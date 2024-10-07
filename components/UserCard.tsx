
interface UserCardProps {
    title: string;
    amount : number;
    dateOfYear : string;
}


const UserCard = ({ title, amount, dateOfYear }: UserCardProps) => {
    const formattedAmount = new Intl.NumberFormat('en-UG', {
        currency: 'UGX',
        minimumFractionDigits: 0,
      }).format(amount);

  return (
    <div className="rounded-2xl odd:bg-lamaGreenLight even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
        <h2 className="capitalize text-sm font-medium text-gray-500">{title}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>

        </div>
        <h4 className="text-l font-semibold my-4">{formattedAmount} UGX</h4>
        
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
            {dateOfYear}
        </span>
    </div>
  )
}

export default UserCard