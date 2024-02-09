import React from 'react'
import CreateModal from '../components/idComponents/CreateModal'
import Table from '../components/idComponents/Table'
import DeleteModal from '../components/idComponents/DeleteModal'
import axios from 'axios'

// create a axio function to get the list of items

function Id() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mode, setMode] = React.useState('create')
  const [rows, setRows] = React.useState([])
  const [selected , setSelected] = React.useState(0)

  const onSubmit = async (data: any) => {
    await fetch('http://localhost:8081/tiparticulos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      find()
    }
    )
  
  }
  const find = async () => {
    axios.get('http://localhost:8081/tiparticulos',{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
      
      }).then((response: { data: React.SetStateAction<never[]> }) => {
        setRows(response.data);
        setIsOpen(false)
      });
  } 
  const delet = async (id: any) => {
    axios.delete(`http://localhost:8081/tiparticulos/${selected}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
      }).then(() => {
        find()
        setIsOpen(false)
      });
  }
  React.useEffect(() => {
    find()
  }, []);

  return (
    <div>
      <CreateModal onClose={()=> {
setIsOpen(false)
      }}
      onSubmit={onSubmit} isOpen={isOpen && mode === 'create'}
      />
      <DeleteModal onClose={()=> {
setIsOpen(false)
      }}
      onDelete={
        (id: any) => {
          delet(selected)
        }
      } isOpen={isOpen && mode === 'delete'}
      />
      <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Tipos de Artículos</h1>
            </div>
          </header>
        <Table
        OpenCreateModal={() => {
          setIsOpen(true)
          setMode('create')
        }}
        OpenDeleteModal={(id: any) => {
          setIsOpen(true)
          setMode('delete')
          setSelected(id)
        }}
        rows={
          rows
        }
        cols={[
          'Identificador', 'Descripción', 'Estado'
        ]}
        />
        </div>
    
  )
}

export default Id