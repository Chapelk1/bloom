import sam from "assets/sam.jpg";
import alex from "assets/alex.jpg";

function Career() {
  return (
    <section>
      <div>
        <h2>Hey, we're bloom.</h2>
        <p>
          Product Management and <span>Software Engineering</span>
        </p>
        <div>
          <div>
            <img src={sam} alt="" />
          </div>
          <h3>Sam</h3>
          <p>Product Management & Executive Search</p>
          <button>
            LinkedIn
            <svg>
              <use></use>
            </svg>
          </button>
        </div>
        <div>
          <div>
            <img src={alex} alt="" />
          </div>
          <h3>Alex</h3>
          <p>Software Engineering & Executive Search</p>
          <button>
            LinkedIn
            <svg>
              <use></use>
            </svg>
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default Career;
