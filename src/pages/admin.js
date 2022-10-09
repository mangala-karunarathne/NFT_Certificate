function Admin() {
  return (
    <div>
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <h1>Admin Dashboard</h1>
        </div>
            <div  style={{
                marginTop: "5%",
                width: "50%", 
                marginLeft: "25%"
                }}>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="name" 
                     placeholder='Enter Name'/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="degree" 
                     placeholder='Enter Degree'/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="institute" 
                     placeholder='Enter Institute'/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="effective_date" 
                     placeholder='Enter Effective Date'/>
                </div>
                <button type="submit" className="btn btn-primary">Issue Sample Certification</button>
            </form>
            </div>
    </div>
  )
}

export default Admin

