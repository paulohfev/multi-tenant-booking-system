const LoadingSpinner = () => {
  return (
    <div role='status' className='flex justify-center items-center h-full'>
      <div className='animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900'></div>
    </div>
  )
}

export default LoadingSpinner
