import React from 'react'

const AdminPageHeader = ({title}) => {
  return (
    <>
        <div className='  h-10 w-95% flex flex-col justify-start items-start text-3xl font-bold text-cyan-500'>
            {title}
        </div>
    </>
  )
}

export default AdminPageHeader