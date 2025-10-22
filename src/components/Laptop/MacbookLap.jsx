import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";

const MacbookLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // ✅ MacBook models with online image URLs
  const macbookModels = [
    {
      id: 1,
      name: "MacBook Air M2",
      image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFhUVFRgVFhIYEBUWGBMWGBgWFhUTFRYYHSggGBomGxgZITEhJSkrLi4uFx8zRDMtNygtLisBCgoKDg0OGxAQGy0jICUwLS03MTItLS0vMSstLSstLi8rLS0xNS0vMS01LS4tKy03LS0tKy0tLSstNS0wLS0tMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABNEAABAwICBAYNCgIKAgMAAAABAAIDBBEFIQYSMUEHEyJRYXEXMjVCUlNigZGSobPSFCNUcnSCsbLB0TPhFiRVc4OToqOkwvDxQ0Rj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEBAAIBBAAEBQQDAAAAAAAAAAECEQMSITETQVHRBDJhofAigZHhUrHx/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAReVTUNjY6R5s1jS5zjua0XJPmCpGq4dZ3yEUtCwsvZpkkdrOG4kNsAejPrUxEz0LzRUtR8KmMShxjwyJwb21nuyztnyudevZMxr+yo/Xd8St4d/SVd9fVciKnBwlY3/AGVH67viX23hExw7MJZ67viVcSnK4EVQP4QsdALjhDLAEk67tgzPfLQnh1rvoUPrSfumJSv1FRVfw0YlC8xy4fC14tdpe/eA4bDzEFYXZ+q/okHrSfumMDoJFz6eH2r+iQevJ+692cOVeWl4oYdVtrnWflrGw386YF9oqA7PNb9Dg9aT919x8Odc42FFASfLf+6REyZX4ipeHhSxhzdduFxlpJF9d20bR2y9Y+EnGzswqM/fd8StNLR3Cu6vquNFT8nCLjjTY4SwG1+3ds9ZfPZIxv8AsmP13fEq7ZTmFxIqcqOFHF4GmSowlojbm4iRwIbz35VuuytLR3GY6ymiqYb6krdYA2u03Icw23hwIPSFCWxREQEREBERAREQEREGj077m132Oo9y9cl4ZLqgEbiutNO+5td9jqPcvXItKcgr6c4nKJWhofjIjlD9rJBZ46djgfx86sSalGTmm7HZtd+h6VQmG1VuSSQDvHencVZGiemxitDUAEc+4jc4c/WF7OfFpur36OO1MTymUUaz6eNfVM2GUB0TxnnYn8CsptK5u0ededqTy2pEw9mxiy570zwM0tVJHbk6xLOlhzb7DZdERhRPhB0X+Uxa7B84wZdI22U/D4m22fP/AGtqTiMqx0lpvlFJTVbc3CMQTc+vCA0OPSWahWx4LMBo6hkzZ6eN72PBBIN9RwyG3na72L50NIDpKKfksmyBOxkwuGE8wPanrX7gpfhleOMBa25jk/u3Ecr7rg09QI3rq1PhZmv1j8/r/rKutGcJgzQXD21bQ6kjMc0RDQQbNliJcQM73cxxP+Cq10nwj5PV1dK1tmuYTE0Dc3VljHWdS33lf09MJYwWEXBD43bQHt2bN20HoJVa8KELZpBNG0snpg1z2nMuiNvnAN+o/knqbuK4tOOW09KZaVl0r7EHmK+sWpOLkyFmO5TOgHaz7py6rHeseJyiImtsSdwubQycPhkZvbIJB9WVo/At9ql+G06qXQnGRFIxzjyP4UvQxxu1/wB11irnoGrt+IndEW9XLWu27GxGP5w9Fh6AF8RxBo1j5h0rLr2fOHpsfYsWvfmG8wXFM8OmIaPS516KrJ+jy/kctzwIdxaXrm9/KtHpY7+pVX2eX8jlvOBDuLS9c3v5VjaMNIlO0RFVIiIgIiICIiAiIg0enfc2u+x1HuXrkSEENFwc8xltFyLjnzBHmXXenfc2u+x1HuXqotDcDgq8GgZUxEgOm4uZmUkRMjrlp3jnacirUjMotOFTsfZbSkrQRqv2bjvb1LM0h0OnprvYRPAL/PRi+qBt41mZjtz5t6VHWuW1NS2nPCkxEwm+FY9UU2bHa7PSPONoU3wbhKYbB+sw+sP39ipymr3MORWwZWxP7dtj4Tcj+y7Y1dPV+eGe2Y6X/Q6XQSbHsd5wD6Nq3EOJRu32XODYGntJvM4WWZTT1cf8OU9TZcvRdJ+Epb5fc8SY7W5pTocycmansJNpaO+6ulYBpGV8Ygn+bq4xZjyLcYBuPSodh+meIQkazdcDybH0ty9hUjh05o6mwqmPgkGya2w/WH62XRW2pSu2/OOp84949XNfSzO6n8e3oz9G8VmonfJqlrrDZkSSBkHM8IgZao2gC2Ys780nmhrJAKeVkVdENaAvI4qsicO01tj2uFxzjMLetc2oiDZdSoj72dhuegkjNjunZ+KhWlehbpBeJ1yCXjLO5zJc0Zgk5mRlw7a4X5S5r1rqW3Rxb7ft7NaXtWMW6/O/fpHK/BWzMMWoYnh1gxxzp5TkIX+Q45MdsOTTZwaoJU0z4nujkaWvabFp3fyU4dUTZNmc7jWMsHPAMmpstrG7amE7LOvv5Vl7Vs9PVsEdYOKlblHVDMc2qXOPKb5LzcbnO5LRXW0ZnEr0t6Ibh1XqO5wciOcK39ANKGkNp5XbrQyHv27onHc4bB6OZVJjGBT0pu8a0d7CZlyw32A72O8l1ivmgxAsyObd4/UHcVXTvxsutaueYdOztD2hw2t/BaPFQQ6/OFC9FtOXNAbI4vaO/wC/aOZ439anIqI52azCCDmLG6pfRmnPcEWzx5ovpRJ/Uqr7PL+Ryk3Ah3Fpeub38qjWlkVqOp/uJfyOUl4EO4tL1ze/lXPq9w0onaIiyXEREBERAREQEREGj077m132Oo9y9UPoDpo6mpWQiMuALjYSsN7uJzids27rXV8ad9za77HUe5euX8FJMLQYYHi55Tw4OOZ3tkbf0LTTnEq2iJjlPKzFqKd/GFtRRzeOia5tz5YBII6ytLV4EyYktlppyf8A5I3Np5iTny2GzXHpLXE55ryiww2v8mfGPCbNNG30vaW+1ehwiQi/zoHhGaKRvsjP6LqraJ7hltx1LRYjozLFckOAv38bmeh1rHryWqdSyDvT5uV6S29lK7zw9rVRMHRIB7GZ+xeMmKPcbSPp5f8AAfI49WtH+qi+nTy4WibIuJiMubcveOucN5W+nqYyOVTi3S10Q9krR5gsCWSl8SB9So/k9Z4mOpWy8WYo4d8V7txp/PfrzWG5sB7Vk3+axw90F4Opz3od5x+ymNXUjqUTET3DfYfpC+J2vGSx3hMcWX6wMnecFS+h4TS4BlVE2UDY7tJG+U17NjukWVZfJn8xX6Kd/MVM61p+bk2R5LckxygqRbj25m/FVTLEG1rsqYhdp8pwc7pWsrNFtYF0DzboIqYz0B8V326XsJVdR0ch2NJWTHQztN78WecyCM/6iFMatkbIjpIGU9bTEtjbrNAsWRkStsdo4oHXaOcWbdamrNO51nxGB+/UyHWY3ZNHQ0DrWwpajES3Kqc5vM7XqGj0Me0LJdis4FpZ6VwHe6g/I1zPwVovniSYR5tK5pvFK13NytR3qu/dbbDdI6inNy1w53AWB6+9cvp9ZSO7aOMn/wDOnfH+pPtWHI6HvIZmDn1y38zitYjbzWVJ57S3EdPIp6SeN4s90EjQQLXJYQLjZt6VZHAh3Fpeub38q55rXt1HZntTtdG/d0NuuhuBDuLS9c3v5Vx6+MtaQnaIiwXEREBERAREQEREGj077m132Oo9y9c96LYpHBRs1pXaxL/m4yGHtjm9zA1xHW8dAIXQmnfc2u+x1HuXrnnRyopaehjmfGONcX/OSASbHGwghJ1XOta7nZN9C00u1b9NlTVT5bP1HRtd2paLOf0CS2vJ925WuxXE4GEhztZwyLWnjHfede3pdrDmWixjSCWcuzLWuyI1y50g5pZNrh5OTRuatfTUpcbALbxLTxVTbHcs2XFSTyImt6Ty3D2Bp87SjGTvGby1vXqN9Vth7FKtEtCJanNrQGDbM4ckfVHfH2K08D0Mo6exLeNkHfu3fVG7zWW3hRXnVn9o/OGc6kz8n8qZwvQ+WXNkL3X762o30uzPmBUnpODiotnxTPM6Q/8AUK5Q+ONpcdVjWi5cbAAdJKr/AEm4TIxdlG0SEZGU5RjqPfK+nqZnGnSI+sotXjNpaGfQYxtJfVBoG08QxoHpP6qH1+sx5ayo12jv9XVv1NzPn2LIq8SqKt9nOkmduYwHVHVYZdYC3FBoZUWD5yymYTkLcZK8+C0c/Uunxp6zmWXh+c8I/HUPtfN3lOAaP/POthS4LVSjX5LGeMcAxovs5TtvmupfJTYfhzQ+YF81rsiLxJMd2s93awjobnltOxR+txKpxB1mDkDMxs5McQz/AIj9riRu37dUZqtrzeMfnvKaViOY4a2eOmjydJLUO3ta4xRjrc4Enq1QvGCaRxAgijjzsNSLWcTuAe/WeTbwVIsA0HfKOMqDxUTc3FwsbcxAPJPkg6wO1wPJOXpBpHSYe0xU8YdMRbVJs4Dwp3ttqAnPimW6SMwua0R23z5NDNgDy0vqpTZu0yPvq9Di51m9WsHeStHU1tKw2iYZT4Vy1vpIu7zt8/PrcSxOapdrTPLrdq2waxg5mMGTR1L1w/Dy/PY0bXHYP3PQqVtMzikJmP8AKX18vmfk2zB4LG29BzPtW1wnRWeodsJO/eR1k5DzlTfRXQYkB0jS0HvNj3Dnee8HkjPnKnQgjgYGsAAGVgLehXvNa/NO6fsrGZ64hWmJaBxQUlRJI672wSOAB2EMJGf8lY/Ah3Fpeub38qjuls96Oq/uJfyOUi4EO4tL1ze/lXJrWmZ5a0TtERYriIiAiIgIiICIiDR6d9za77HUe5euQ4TyR0ZDoFybDmzJ9K68077m132Oo9y9cjUTLgK1e0Sy6KlLyAArP0J0PY5omnHzQ2N8aRu+qtHodgfGSMZ4Wbj4LN/4HzDpVozSDJjBZrRqtHMAvT0dPZXPnP2j+3HrX8me2oyDWgNaMg0CwA5gFjY7pFBRRh0xJe4ExwttryW355NZzuOS02O6QilAjjbxtU+3FxWJDL7HyAZnobv6BmvLAtAnyv8AlOJPL5HkOMZN+rXIyy3NGQ5lz3tGV9OszzKJ1k+IYu/tfmgeTGCWwM6ztld0nzBSnBeC+MWdUuMhHe9qwdQGf4Kw6WmZGA1jQ0DIADYo7pzpc2jj1WWMzwdRvgje93Qs51pniG+2GFjuJ0mGs4uNjDKRyYgAGt8t9v8A2Vq8ApKqtvUOcQHZMkLe2HOxuWrGN1tvVtiuiOBPxCpc+cuMTSHzOJzkJ7WMHptnzAbrhXU+dsUd7Wa0ANY0AX2NYxo2XJsAF0U1vDrivc+bG+nF5/V0iTOD2mdyJGl7nHWfK5x13br6wtYbrCwyHMt4zDqemDYoWMaGjWDbANYNrpX+03PSVsRNxcbnvzdbWdbedzG9Gxo9O0lVlwhYw+Ngp3OtLUgyTnxUAudTzhpuOZtt6ilrXt+qUXjEYq1unOneWrTmzRcQ5WvbI1Dhu8kbuvWtVxJcSSSSTck7Secr7q6gyPLzlfYL9q0dq30ek3O9ImrLU1N9sR1HX59WlKbY+rNw2jL3AbBtJ3ADaSri4P8ARZtmzyNy2wxkbBumePDO0cwseZQzQjBxI9jXDkkcbJ0xtIDWfefYdQKumgcumY8PT47llNs2wyp7MbYbT+C0OKkl1uYLaV0vLI5rD2LAxBmYPOP5LibotpRH/Uqn7PL+Ryk3Ah3Fpeub38q0elbf6lVfZ5fyOW84EO4tL1ze/lVNScrVhO0RFmsIiICIiAiIgIiINHp33NrvsdR7l65W0cp9ctHT+q6q03YTh1aALk0lQABvJifYLkyklfH2koH3Gn8VfTtWts26RMTMcLm4P4RaaXybDoBIaP8ATkthjGIGBo1G688p1IY7X1n+ER4IuL9YGV7qoMP0qroWlsVWGgixHExHp3tK+hpbX8aJvlY4xrNRruIhOq03JABbYHPaBddep8XWZnDCNDrK7tFNHW0t5ZjxtU/OSU56pO1rD+vosFJmS3XOn9PcT+m/8eD4F9DhAxQf/e/48HwLlteJbRV0PX1jIo3yPNmMaXuPM1ouSqOMjq2aSrnuGuPJZfY0dqwdAG0860OJ6Z4jUROhmrNaN9tZvExNvYggXa0HaAsCLGaloaG1AAbaw4qPKxvzZ+dK3rE8kxLoTR2jbTwNjDQ0nlvA8N1rjpsLN6mhe81TrztYNkTeMd9d12sv1N1j1kcyof8Ap1if03/Yg+BfEWm2Itc5wrBrPtrHiITfVvba3LaVbxYNroQ1eq5o5ru/Qf8Ab0KgtMsVM89VOe/kELOhgvb/AExgffK8ZNNsRcbmtztb+BCMs+ZvSVH3ue4BplFgS62qNpABPsUxq1iJwiavMLMpWXIHOVh8SfGD1QvSIvaQRKARmOSFWl4ieUzC5tEIQyN7vCkEY+rC0DLrc93oUzwydc+waUVrGhraoBoJIHExbXEucc285WRFpriLdlZb/Ah+FdWr8VS8cRLmroXi2ZwvrEpLSu6bH0gFfkcocNU+Y9KoibTjEnG7q25tb+BDs8zF8/00xH6Z/sQ/CubxK4w32zlbmlzbUVWD9Hl/I5brgQ7i0vXN7+VUPW6YYhKx0clWHMe0scOIhF2kWIuG32K++BSMtwamB55vOOPlsVlM5aJwiIoBERAREQEREBVTj2gmMyTvfDiDWxlx1B8oqGENuSA5rQRcDK4Odr5bFayKYnBhR8uhekAJbx7njZrCsdquHU54PpCxqPgtxRxIcKeMDYXkG/QOL1vbZXyindKMKRHBLiPjaP0SfAv0cE+I+NovVk+BXaibpMKT7FGI+NovVk+BfvYoxHxtF6snwK60TdJhSnYoxHxtF6snwJ2KMR8bRerJ8CutE3SYU1T8F+IsFg7DzmTcxyE55+CvTsbYlz4d/lSfCrhRN0m2FPdjbEufDv8AKk+FfE3BliLmlpOHAEWuIpAfMdVXIibpNsKU7FGI+MovVk+BOxRiPjaL1ZPgV1om6TClOxRiPjaL1ZPgX52J8R8bRerJ8CuxE3SYUl2J8R8bRerJ8CdibEfG0Xok+BXaibpMKJrOCzE2AFvyaS52MNiOk8YGi3nX3DoVj7Q1jHljRkA2q1WsHU1+Q6grzRN0mFP0ugGONka44iywOd6mqcLfVsNbquOtW5TxarGtuTqtDdY7TYWueleiKJnJgREUJEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
    },
    {
      id: 2,
      name: "MacBook Air M3 (2024)",
      image:
        "https://inspireonline.in/cdn/shop/files/MacBook_Air_13_in_M3_Silver_PDP_Image_Position_1__en-IN_b7010f62-6a3a-4332-b2b7-2dacdc53c5b1.jpg?v=1730311103&width=823",
    },
    {
      id: 3,
      name: "MacBook Pro 13-inch M2",
      image:
      "https://icreststore.in/wp-content/uploads/2022/09/13-inch-MacBook-Pro-Apple-M2-chip-with-8-core-CPU-and-10-core-GPU-256GB-SSD-Space-Grey.jpg"
     },
    {
      id: 4,
      name: "MacBook Pro 14-inch M3 Pro",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      name: "MacBook Pro 16-inch M3 Max",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310",
    },
    {
      id: 6,
      name: "MacBook Air M1 ",
      image:
      "https://m.media-amazon.com/images/I/71jG+e7roXL.jpg"
      },
    {
      id: 7,
      name: "MacBook Pro 16-inch Intel",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 8,
      name: "MacBook Pro 14-inch M1 Pro",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 9,
      name: "MacBook Pro 15-inch",
      image:
      "https://m.media-amazon.com/images/I/61iVOmuO1pL._AC_UF1000,1000_QL80_.jpg",
       },
    {
      id: 10,
      name: "MacBook 12-inch Retina",
      image:
        "https://m.media-amazon.com/images/I/515Y+JRz9IL._UF1000,1000_QL80_.jpg",
    },
  ];

  const filteredModels = macbookModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              color: "#6c757d",
              fontSize: "14px",
            }}
          >
            Home / Repair / Laptops / Apple
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Apple MacBook Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search MacBook models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "300px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Models Grid */}
        <div className="tablet-grid">
          {filteredModels.map((model) => (
            <div
              onClick={() =>
                navigate(`/laptops/apple/${encodeURIComponent(model.name)}`, {
                  state: { 
                    brandImage: model.image, 
                    brandName: 'Apple', 
                    modelName: model.name 
                  },
                })
              }
              key={model.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                }}
              >
                {model.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            padding: "40px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            APPLE MACBOOK REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            MacBooks are renowned for their performance, sleek design, and durability. Our
            expert technicians provide genuine parts and precision repairs for MacBook Air
            and Pro models — covering screen, battery, keyboard, SSD, and logic board
            replacements.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR MACBOOK
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MacbookLap;
