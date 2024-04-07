import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { UserType } from "@/types/UserTpye";

export default function UserCard({seller, name}: UserType) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">{seller}</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{name}</p>
      </CardBody>
      <Divider/>
      
    </Card>
  );
}
