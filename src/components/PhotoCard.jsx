import { Card, Chip,Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa6";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-xl"
        ></Image>
        <Chip
          size="sm"
          className="absolute right-2 top-2 bg-slate-50 rounded-lg"
        >
          {photo.category}
        </Chip>
      </div>
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
      </div>
       <Link href={`/all-photos/${photo.id}`}>      <Button variant="outline" className={'w-full'}>View</Button></Link>
    </Card>
  );
};

export default PhotoCard;
