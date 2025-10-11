import React from 'react'

const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
  return (
    <div className='bg-white rounded shadow-md p-4'>
        <div className='text-gray-600 flex items-center gap-2 p-2'>
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

        </div>
        <div className='flex justify-between'>
            <div className='font-semibold text-2xl p-2'>
                ₹ {amount}
            </div>
            {orderCount ? <div className='text-blue-600 underline font-medium cursor-pointer flex items-center'>
                {orderCount} Order(s) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
            </div> : null }
        </div>
    </div>
  )
}

export default RevenueCard