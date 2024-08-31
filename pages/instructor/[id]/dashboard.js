import { Button, Card } from "react-bootstrap"

const DashboardPage = () => {
  return (
    <div className="bwm-form">
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-title">Dashboard Instructor</h1>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Portfolio Title</Card.Title>
              <Card.Text>Just Something testing description</Card.Text>

            </Card.Body>
            <Button variant="primary">Go some where</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage