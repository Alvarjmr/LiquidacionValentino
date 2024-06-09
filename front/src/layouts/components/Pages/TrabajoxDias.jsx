import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../admin/Panel.css";
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBRadio,MDBCardImage}from 'mdb-react-ui-kit';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const datos = [
  createData('Periodo (DD-MM-AAAA)', ),
  createData('Dias Laborados (mensualizado)',),
  createData('Salario Diario',),
  createData('Salario Mensualizado',),
  createData('Transporte',),
  createData('Prima primer semestre',),
  createData('Prima segundo semestre',),
  createData('Cesantías',),
  createData('Intereses sobre cesantías' ,),
  createData('Vacaciones' ,),
 
];

const aportes = [
  createData('Pensiones (AFP)', ),
   
];

function TrabajoxDias() {

  const mostartablaxdias = () => {
    document.getElementById('tablaocultaxdias').style.display= 'block'

  }

    return (
      <>
       <Navbar/>
    <div className="flex">
    <Sidebar/>
    <div className='content'>
    <form >
   <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='5' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
      <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">TRABAJO POR DIAS</h3>

<MDBRow className='text-black m-4'>

<MDBCol md='6' >
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Fecha Inicio" />
      </DemoContainer>
    </LocalizationProvider>
</MDBCol>

<MDBCol md='6'>
  
  <LocalizationProvider dateAdapter={AdapterDayjs} wrapperClass='mb-4'>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Fecha Fin" />
      </DemoContainer>
    </LocalizationProvider>
</MDBCol>

</MDBRow>


<MDBInput wrapperClass='mb-4' label='INGRESE SU SALARIO DIARIO: 43333' size='lg' id='form1' type='text'/>
<MDBInput wrapperClass='mb-4' label='INGRESE DIAS LABORADOS SEMANA' size='lg' id='form1' type='text'/>

<MDBRow>

<MDBCol md='6'>
<p className="mb-4">¿TIENE DERECHO A UN AUXILIO DE TRANSPORTE?</p>
</MDBCol>

<MDBCol md='6'>
<MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Si' inline />
<MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
</MDBCol>

</MDBRow>

<MDBBtn className='mb-4 w-100 gradient-custom-4 bg-info' size='lg' type='button' onClick={mostartablaxdias}>Calcular</MDBBtn>


      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex'>
        <MDBCardImage src='https://image.freepik.com/vector-gratis/calendario-marcado-hombre-plan-negocios_18660-1273.jpg' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>

   {/*resultado de liquidacion completa*/}
   <Divider />

<TableContainer component={Paper} id='tablaocultaxdias'>
    <Table sx={{ minWidth: 250 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><h4>DATOS LIQUIDACIÓN</h4></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          </TableRow>          
      </TableHead>
      
      <TableBody>
        {datos.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableHead>
        <TableRow>
          <TableCell><h4>TOTAL</h4></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          </TableRow>          
      </TableHead>

    

    <TableHead>
        <TableRow>
          <TableCell><h4>APORTES A LA SEGURIDAD SOCIAL (Valor mensual)</h4></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          </TableRow>          
      </TableHead>
      <TableBody>
        {aportes.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
  </TableContainer>
  
</MDBCard>

</MDBContainer>
</form>
    
     
</div>
</div>
     
      </>
    );
  }
  
  export default TrabajoxDias;
  