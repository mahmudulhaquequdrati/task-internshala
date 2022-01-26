import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";

const AddUser = ({ open, setOpen, setUsers }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/datas`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You have successfully added an user.");
          fetch("http://localhost:5000/datas")
            .then((res) => res.json())
            .then((data) => setUsers(data));

          setOpen(false);
        }
      });

    reset();
  };
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  my-auto sm:align-middle sm:max-w-lg sm:w-full px-6 py-4">
              {/* new-one */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex justify-center  lg:justify-start px-0 lg:px-8 md:px-4"
              >
                <div className="">
                  <div className="mt-8  flex">
                    <input
                      required
                      className="border   m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                      type="text"
                      {...register("employee_name")}
                      placeholder="name"
                    />
                    <input
                      required
                      className="border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                      type="text"
                      {...register("employee_salary")}
                      placeholder="salary"
                    />
                  </div>
                  <div className="my-2  flex">
                    <input
                      required
                      className="border   m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                      type="text"
                      {...register("employee_age")}
                      placeholder="age"
                    />
                    <input
                      required
                      className="border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                      type="text"
                      {...register("profile_image")}
                      placeholder="image-link"
                    />
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <input
                      type="submit"
                      value="Add user"
                      className="cursor-pointer w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      //   onClick={() => setOpen(false)}
                    />

                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default AddUser;
