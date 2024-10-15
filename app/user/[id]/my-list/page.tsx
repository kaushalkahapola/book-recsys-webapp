import { BooksTable } from "@/app/_components/users/BooksTable/BooksTable"

const MyListPage = () => {
  return (
    <div className="space-y-5">
        <div className="text-3xl font-medium text-gray-600">My Books List</div>
        <div className="border-l-2 border-t-2 p-3 rounded-md"><BooksTable /></div>
    </div>
  )
}

export default MyListPage