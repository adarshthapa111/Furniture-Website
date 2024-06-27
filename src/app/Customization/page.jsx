"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

export default function Component() {
  const [selectedFurniture, setSelectedFurniture] = useState({
    type: "sofa",
    color: "gray",
    material: "fabric",
    legs: "wood",
    pillows: 2,
  });
  const handleColorChange = (color) => {
    setSelectedFurniture((prev) => ({ ...prev, color }));
  };
  const handleMaterialChange = (material) => {
    setSelectedFurniture((prev) => ({ ...prev, material }));
  };
  const handleLegsChange = (legs) => {
    setSelectedFurniture((prev) => ({ ...prev, legs }));
  };
  const handlePillowsChange = (pillows) => {
    setSelectedFurniture((prev) => ({ ...prev, pillows }));
  };
  const handleReset = () => {
    setSelectedFurniture({
      type: "sofa",
      color: "gray",
      material: "fabric",
      legs: "wood",
      pillows: 2,
    });
  };
  const handleSave = () => {
    console.log("Saved customization:", selectedFurniture);
  };
  return (
    <div className="grid grid-cols-[1fr_300px] h-screen w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center bg-muted/40 p-8">
        <div className="relative w-full max-w-3xl">
          <img
            src="/img/vector3.png"
            alt={`Customized ${selectedFurniture.type}`}
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <CodeIcon className="h-5 w-5 text-muted-foreground" />
                <Select
                  value={selectedFurniture.color}
                  onValueChange={handleColorChange}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="beige">Beige</SelectItem>
                    <SelectItem value="navy">Navy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <ComponentIcon className="h-5 w-5 text-muted-foreground" />
                <Select
                  value={selectedFurniture.material}
                  onValueChange={handleMaterialChange}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fabric">Fabric</SelectItem>
                    <SelectItem value="leather">Leather</SelectItem>
                    <SelectItem value="velvet">Velvet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <FootprintsIcon className="h-5 w-5 text-muted-foreground" />
                <Select
                  value={selectedFurniture.legs}
                  onValueChange={handleLegsChange}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select legs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wood">Wood</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                    <SelectItem value="acrylic">Acrylic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <PillIcon className="h-5 w-5 text-muted-foreground" />
                <Select
                  value={selectedFurniture.pillows}
                  onValueChange={handlePillowsChange}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select pillows" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={0}>0</SelectItem>
                    <SelectItem value={1}>1</SelectItem>
                    <SelectItem value={2}>2</SelectItem>
                    <SelectItem value={3}>3</SelectItem>
                    <SelectItem value={4}>4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l bg-background p-6 shadow-md border border-gray-400">
        <div className="grid gap-6">
          <div>
            <h2 className="text-lg font-semibold font-josefin text-center bg-gray-100 border border-gray-100 rounded-xl">
              Current Customization
            </h2>
            <div className="grid gap-2 pt-2">
              <div className="flex items-center justify-between">
                <span>Type:</span>
                <span className="font-medium">{selectedFurniture.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Color:</span>
                <span className="font-medium">{selectedFurniture.color}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Material:</span>
                <span className="font-medium">
                  {selectedFurniture.material}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Legs:</span>
                <span className="font-medium">{selectedFurniture.legs}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pillows:</span>
                <span className="font-medium">{selectedFurniture.pillows}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleSave}>Save Customization</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}

function PillIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}
