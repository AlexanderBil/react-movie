import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>m at minus facere enim rem commodi deleniti fugiat placeat aut eius voluptas? Id ut dolorum distinctio, eum veniam quo odit sit est repellendus sequi, quisquam quis quam consequuntur vero error praesentium quas officia odio illo consectetur similique ab? Corrupti nisi accusamus tempora ullam quasi ipsa molestiae illum cum et, repellat quis eveniet sequi optio fuga eius atque quaerat quo. Maxime, ex adipisci minima porro, ipsam quae aliquam iste aperiam debitis architecto nemo ullam quo dolorum reiciendis. Omnis consequatur vero aut dolor obcaecati, est nobis perferendis sed sequi dignissimos voluptatibus praesentium fugit non ipsam id! Omnis officia quam maxime accusantium, ipsam praesentium magni aspernatur ducimus esse magnam ea quibusdam deserunt. Repellendus dolores vero esse autem natus labore officiis omnis quasi dolore recusandae, nesciunt cum? Odio sapiente ut tenetur accusamus in, modi quam a ea aperiam dolor dolorem tempore, possimus deleniti nobis officiis! Harum similique voluptatibus placeat nulla, provident illum ipsam fuga beatae vitae possimus odio suscipit sed eaque eveniet libero iusto voluptates quod labore, quas optio iure unde? Quos blanditiis similique optio reiciendis ullam molestiae cum, quis ducimus nisi labore, consequuntur est soluta illum tempora, doloremque itaque non nesciunt saepe minus necessitatibus ex! Voluptatum, modi distinctio ullam unde neque quisquam excepturi impedit quae harum eum sit corporis assumenda dignissimos fuga sunt alias illum doloribus voluptatem, aliquid quia! Id sunt facilis odio soluta, accusamus vel voluptatum aut deserunt rerum laborum placeat adipisci doloribus! Deserunt, quisquam molestiae.</p>
    </>
  );
}

export {Modal}