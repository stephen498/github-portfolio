import React,{useState} from 'react';
import Profile from './Profile'
function Paginates({
  repos,
  pageLimit,
  dataLimit,
 
}) {
const [pages]=useState(1);
const paged =  repos.length !==0?Math.ceil(repos.data.length / dataLimit):1;
console.log(paged)
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage(repos) {
    if (currentPage === paged) return null;
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    // handlePageChange();
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return repos.data.slice(startIndex, endIndex);
  };
  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <div style={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
      <div className="">
        {repos.length !== 0 ? (
          getPaginatedData().map((item, idx) => (
            <div className="pt-10">
              <h1 className="md-10 font-bold text-2xl">
                Viewing {item.name}'s repositories
              </h1>

              <Profile key={item.id} {...item} />
            </div>
          ))
        ) : (
          <div>No repositories found</div>
        )}
      </div>

      <div className="">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>
        {getPaginatedGroup()
          .filter((item) => item <= paged)
          .map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginateItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
}
function Rest({repos}){
    return( <>
    {/* {repos.length !==0 ?repos.data.map((item) => (
                          <div className="pt-10">
        <h1 className="md-10 font-bold text-2xl">
          Viewing {item.name}'s repositories
        </h1>
      
            <Profile key={item.id} {...item}/>
            </div>
    )):<div>No repositories found</div>} */}
    <Paginates repos={repos} dataLimit={6} pageLimit={3}/>
    </>
);
}
export default Rest;