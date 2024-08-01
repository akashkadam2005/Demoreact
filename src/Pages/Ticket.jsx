import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Index from '../Componads/Index';

const Ticket = ({data,title,index}) => {
  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col lg={12}>
            <Card className="p-3">
              {/* <h2 className="text-center bg-info">{title || 'Ticket Seved'}</h2> */}
              <table className="mb-5 ms-5">
                <thead className='bg-light'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Mobile No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    
                    <td>{data.name || 'N/A'}</td>
                    <td>{data.email || 'N/A'}</td>
                    <td>{data.date || 'N/A'}</td>
                    <td>{data.event || 'N/A'}</td>
                    <td>{data.message || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ticket;
