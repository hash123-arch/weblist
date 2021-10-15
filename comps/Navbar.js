
import Link from 'next/link';
import Image from 'next/image';




const Navbar = () => {

    //you can import an image component from next
    return ( <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Image src="/logo.png" width={128} height={77}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/"><a className="nav-link active"href="#">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link" href="#">About</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/ninjas"><a className="nav-link" href="#">Ninja Listing</a></Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </div> 
        
        
        );
}
 
export default Navbar;