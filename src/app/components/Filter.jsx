// "use client";

// import { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "../components/ui/accordion";
// import { Label } from "../components/ui/label";
// import { Checkbox } from "../components/ui/checkbox";
// import { Button } from "../components/ui/button";
// import { Slider } from "../components/ui/slider";

// export default function Filter() {
//   const [selectedFilters, setSelectedFilters] = useState({
//     category: [],
//     price: { min: 0, max: 1000 },
//     material: [],
//   });

//   const handleFilterChange = (type, value) => {
//     if (type === "category") {
//       setSelectedFilters({
//         ...selectedFilters,
//         category: selectedFilters.category.includes(value)
//           ? selectedFilters.category.filter((item) => item !== value)
//           : [...selectedFilters.category, value],
//       });
//     } else if (type === "price") {
//       setSelectedFilters({
//         ...selectedFilters,
//         price: value,
//       });
//     } else if (type === "material") {
//       setSelectedFilters({
//         ...selectedFilters,
//         material: selectedFilters.material.includes(value)
//           ? selectedFilters.material.filter((item) => item !== value)
//           : [...selectedFilters.material, value],
//       });
//     }
//   };
//   return (
//     <section className="bg-background  max-w-3xl shadow-md mx-auto border border-gray-300 p-4 rounded-lg">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 font-josefin">
//           Filter Products
//         </h2>
//         <div className="grid md:grid-cols-[240px_1fr] gap-8 justify-center">
//           <div className="bg-card rounded-lg shadow-sm">
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="category">
//                 <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
//                   Category
//                 </AccordionTrigger>
//                 <AccordionContent className="p-6">
//                   <div className="grid gap-2">
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("category", "chairs")
//                         }
//                         checked={selectedFilters.category.includes("chairs")}
//                       />
//                       Chairs
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("category", "tables")
//                         }
//                         checked={selectedFilters.category.includes("tables")}
//                       />
//                       Tables
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("category", "sofas")
//                         }
//                         checked={selectedFilters.category.includes("sofas")}
//                       />
//                       Sofas
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("category", "beds")
//                         }
//                         checked={selectedFilters.category.includes("beds")}
//                       />
//                       Beds
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("category", "storage")
//                         }
//                         checked={selectedFilters.category.includes("storage")}
//                       />
//                       Storage
//                     </Label>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="price">
//                 <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
//                   Price
//                 </AccordionTrigger>
//                 <AccordionContent className="p-6">
//                   <div className="grid gap-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm font-medium">
//                         ${selectedFilters.price.min} - $
//                         {selectedFilters.price.max}
//                       </span>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() =>
//                           handleFilterChange("price", { min: 0, max: 1000 })
//                         }
//                       >
//                         Reset
//                       </Button>
//                     </div>
//                     <Slider
//                       min={0}
//                       max={1000}
//                       step={10}
//                       value={[
//                         selectedFilters.price.min,
//                         selectedFilters.price.max,
//                       ]}
//                       onValueChange={(value) =>
//                         handleFilterChange("price", {
//                           min: value[0],
//                           max: value[1],
//                         })
//                       }
//                     />
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="material">
//                 <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
//                   Material
//                 </AccordionTrigger>
//                 <AccordionContent className="p-6">
//                   <div className="grid gap-2">
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("material", "wood")
//                         }
//                         checked={selectedFilters.material.includes("wood")}
//                       />
//                       Wood
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("material", "metal")
//                         }
//                         checked={selectedFilters.material.includes("metal")}
//                       />
//                       Metal
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("material", "fabric")
//                         }
//                         checked={selectedFilters.material.includes("fabric")}
//                       />
//                       Fabric
//                     </Label>
//                     <Label className="flex items-center gap-2 font-normal">
//                       <Checkbox
//                         onCheckedChange={() =>
//                           handleFilterChange("material", "leather")
//                         }
//                         checked={selectedFilters.material.includes("leather")}
//                       />
//                       Leather
//                     </Label>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//           <div>
//             {/* <div className="bg-card rounded-lg shadow-sm p-6 ">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-sm font-josefin font-bold">Applied Filters</h3>
//                 <Button variant="ghost" size="sm">
//                   Clear All
//                 </Button>
//               </div>
//               <div className="grid gap-2">
//                 {selectedFilters.category.length > 0 && (
//                   <div className="flex items-center gap-2">
//                     <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
//                       Category:{" "}
//                       {selectedFilters.category.map((item) => (
//                         <span key={item} className="mr-1">
//                           {item}
//                         </span>
//                       ))}
//                     </span>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() =>
//                         handleFilterChange(
//                           "category",
//                           selectedFilters.category[0]
//                         )
//                       }
//                     >
//                       <XIcon className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 )}
//                 {selectedFilters.price.min !== 0 ||
//                   (selectedFilters.price.max !== 1000 && (
//                     <div className="flex items-center gap-2">
//                       <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
//                         Price: ${selectedFilters.price.min} - $
//                         {selectedFilters.price.max}
//                       </span>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() =>
//                           handleFilterChange("price", { min: 0, max: 1000 })
//                         }
//                       >
//                         <XIcon className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   ))}
//                 {selectedFilters.material.length > 0 && (
//                   <div className="flex items-center gap-2">
//                     <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
//                       Material:{" "}
//                       {selectedFilters.material.map((item) => (
//                         <span key={item} className="mr-1">
//                           {item}
//                         </span>
//                       ))}
//                     </span>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() =>
//                         handleFilterChange(
//                           "material",
//                           selectedFilters.material[0]
//                         )
//                       }
//                     >
//                       <XIcon className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

const Filter = ({
  selectedFilters = {
    category: [],
    price: { min: 0, max: 1000 },
    material: [],
  },
  onFilterChange,
}) => {
  const [filters, setFilters] = useState(selectedFilters);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (filterType === "category" || filterType === "material") {
        if (updatedFilters[filterType].includes(value)) {
          updatedFilters[filterType] = updatedFilters[filterType].filter(
            (item) => item !== value
          );
        } else {
          updatedFilters[filterType].push(value);
        }
      } else if (filterType === "price") {
        updatedFilters[filterType] = value;
      }

      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
              Category
            </AccordionTrigger>
            <AccordionContent className="p-6">
              <div className="grid gap-2">
                {["sofa", "table", "bed", "chair"].map((category) => (
                  <Label
                    key={category}
                    className="flex items-center gap-2 font-normal"
                  >
                    <Checkbox
                      onCheckedChange={(checked) =>
                        handleFilterChange("category", category)
                      }
                      checked={filters.category.includes(category)}
                    />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
              Price Range
            </AccordionTrigger>
            <AccordionContent className="p-6">
              <Slider
                defaultValue={[filters.price.min, filters.price.max]}
                min={0}
                max={100000}
                step={1000}
                onValueChange={(value) =>
                  handleFilterChange("price", { min: value[0], max: value[1] })
                }
              />
              <div className="flex justify-between">
                <span>Rs. {filters.price.min}</span>
                <span>Rs. {filters.price.max}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="material">
            <AccordionTrigger className="text-base font-medium py-4 px-6 border-b">
              Material
            </AccordionTrigger>
            <AccordionContent className="p-6">
              <div className="grid gap-2">
                {["wood", "metal", "plastic", "fabric"].map((material) => (
                  <Label
                    key={material}
                    className="flex items-center gap-2 font-normal"
                  >
                    <Checkbox
                      onCheckedChange={(checked) =>
                        handleFilterChange("material", material)
                      }
                      checked={filters.material.includes(material)}
                    />
                    {material.charAt(0).toUpperCase() + material.slice(1)}
                  </Label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button variant="primary" onClick={() => onFilterChange(filters)}>
          Apply Filters
        </Button>
      </div>
    </section>
  );
};

export default Filter;
