"use client";
import LoadingComponent from "@/app/loading";
import { Input } from "@nextui-org/react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import { UserType } from "@/types/UserTpye";

type DataRow = {
  title: string;
  director: string;
  year: string;
};

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", 
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", 
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const url_based = "https://store.istad.co/api/products/";
const UserTable = () => {
  const [getUser, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [userDetail, setUserDetail] = useState({} as UserType)

  function handleDetail(value: UserType) {
    onOpen();
    setUserDetail(value)
    
  }

  const columnsData: TableColumn<UserType>[] = [
    {
      name: "ID",
      selector: (row): any => (
        <div className=" font-bold text-blue-600">{row.id}</div>
      ),
      sortable: true,
    },
    {
      name: "Seller",
      selector: (row) => row.seller,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img src={row.image} width={70} height={70} alt="pic" />
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onClick={()=> handleDetail(row)}
                >
                  View Detail
                </DropdownItem>

                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url_based);
      const response = await data.json();
      setUser(response.results);
      setFilter(response.results);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilter(getUser);
      return;
    }
    const result = getUser.filter((item: UserType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [getUser, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "Row of per page",
    rangeSeparatorText: "Of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <div className="w-full">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  {userDetail.seller}
                </p>
                <p>
                  {userDetail.name}
                </p>
                <img src={userDetail.image} width={100} height={100} alt="product" />
              
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
   

      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        selectableRows
        pagination
        subHeader
        subHeaderComponent={
          <input
            className="border-[1px] px-4 py-2 w-full rounded-md border-blue-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        }
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        actions={
          <Button className="text-white bg-orange-500 size-15">
            Export PDF
          </Button>
        }
      />
    </div>
  );
};

export default UserTable;
