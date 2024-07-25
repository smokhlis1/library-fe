import { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'title', headerName: "Title", flex: 1 },
  { field: 'author', headerName: "Author", flex: 1 },
  { field: 'ISBN', headerName: "ISBN", flex: 1 },
  { field: 'pages', headerName: "Pages", flex: 1 },
  { field: 'back_cover', headerName: "Back Cover", flex: 1 }
];

function DataTable() {
  const [open, setOpen] = useState(false);
  const { bookData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDelete = async () => {
    if (selectionModel.length > 0) {
      await server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Deleted: ${selectionModel[0]}`);
      setTimeout(() => { window.location.reload() }, 500);
    } else {
      console.log('No row selected');
    }
  }

  return (
    <>
      <Modal
        id={selectionModel}
        open={open}
        onClose={handleClose}
      />
      <div className="flex flex-row">
        <Button 
          onClick={handleOpen} 
          className="p-3 m-3 bg-yellow-700 rounded hover:bg-yellow-800 hover:text-black"
        >
          Create New Book
        </Button>
        <Button 
          onClick={handleOpen} 
          className="p-3 m-3 bg-yellow-700 rounded hover:bg-yellow-800 hover:text-black"
        >
          Update
        </Button>
        <Button 
          onClick={handleDelete} 
          className="p-3 m-3 bg-yellow-700 rounded hover:bg-yellow-800 hover:text-black"
        >
          Delete
        </Button>
      </div>
      <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '100%' }}
      >
        <h2 className="p-3 bg-yellow-800 my-2 rounded">My Books</h2>
        <DataGrid 
          rows={bookData} 
          columns={columns}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection as string[]);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;