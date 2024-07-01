// "use client";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardDescription,
//   CardFooter,
// } from "../components/ui/card";
// import { Label } from "../components/ui/label";
// import { Input } from "../components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/ui/select";
// import { Textarea } from "../components/ui/textarea";
// import { Button } from "../components/ui/button";
// import { useState } from "react";
// import { supabase } from "../Supabase/config";
// import Swal from "sweetalert2";

// const AddFurniture = () => {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [material, setMaterial] = useState("");
//   const [length, setLength] = useState("");
//   const [breadth, setBreadth] = useState("");
//   const [height, setHeight] = useState("");
//   const [image, setImage] = useState(null); // Change this to store the file object

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let imageUrl = null;
//       if (image) {
//         const { data: storageData, error: storageError } =
//           await supabase.storage
//             .from("images")
//             .upload(`public/${Date.now()}_${image.name}`, image);

//         if (storageError) {
//           throw storageError;
//         }

//         imageUrl = `https://nktogubqeimhncnpqjwk.supabase.co/storage/v1/object/public/images/${storageData.path}`;
//       }
//       const { data, error } = await supabase.from("Furnitures").insert([
//         {
//           Name: name,
//           Category: category,
//           Description: description,
//           Price: price,
//           Material: material,
//           Length: length,
//           Breadth: breadth,
//           Height: height,
//           Image: imageUrl,
//         },
//       ]);

//       if (error) {
//         console.log(error);
//       } else {
//         // Show SweetAlert success message
//         await Swal.fire({
//           icon: "success",
//           title: "Furniture added successfully!",
//           confirmButtonText: "OK",
//         });
//         setName("");
//         setCategory("");
//         setDescription("");
//         setPrice("");
//         setMaterial("");
//         setLength("");
//         setBreadth("");
//         setHeight("");
//         setImage(null); // Reset the image state
//       }
//     } catch (err) {
//       console.log("Error submitting data!", err);
//     }
//   };

//   return (
//     <div>
//       <section className="mt-12">
//         <Card className="w-full max-w-2xl mx-auto">
//           <CardHeader>
//             <CardTitle className="font-josefin text-xl md:text-3xl xl:text-4xl text-center">
//               Add New Furniture
//             </CardTitle>
//             <CardDescription className="text-center">
//               Fill out the form to add a new furniture item.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form className="grid gap-6" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     placeholder="Enter furniture name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="category">Category</Label>
//                   <Select
//                     id="category"
//                     value={category}
//                     onValueChange={(value) => setCategory(value)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="sofa">Sofa</SelectItem>
//                       <SelectItem value="table">Table</SelectItem>
//                       <SelectItem value="chair">Chair</SelectItem>
//                       <SelectItem value="bed">Bed</SelectItem>
//                       <SelectItem value="dresser">Dresser</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Enter furniture description"
//                   className="min-h-[100px]"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="price">Price</Label>
//                   <Input
//                     id="price"
//                     type="number"
//                     placeholder="Enter price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="material">Material</Label>
//                   <Select
//                     id="material"
//                     value={material}
//                     onValueChange={(value) => setMaterial(value)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select material" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="wood">Wood</SelectItem>
//                       <SelectItem value="metal">Metal</SelectItem>
//                       <SelectItem value="fabric">Fabric</SelectItem>
//                       <SelectItem value="glass">Glass</SelectItem>
//                       <SelectItem value="leather">Leather</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="length">Length</Label>
//                   <Input
//                     id="length"
//                     type="number"
//                     placeholder="Enter length"
//                     value={length}
//                     onChange={(e) => setLength(e.target.value)}
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="width">Width</Label>
//                   <Input
//                     id="width"
//                     type="number"
//                     placeholder="Enter width"
//                     value={breadth}
//                     onChange={(e) => setBreadth(e.target.value)}
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="height">Height</Label>
//                   <Input
//                     id="height"
//                     type="number"
//                     placeholder="Enter height"
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="image">Main Image</Label>
//                 <Input
//                   id="image"
//                   type="file"
//                   onChange={handleImageChange} // Store the file object
//                 />
//               </div>
//               <CardFooter className="flex justify-end">
//                 <Button type="submit">Save Furniture</Button>
//               </CardFooter>
//             </form>
//           </CardContent>
//         </Card>
//       </section>
//     </div>
//   );
// };

// export default AddFurniture;

"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { supabase } from "../Supabase/config";
import Swal from "sweetalert2";

const AddFurniture = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [images, setImages] = useState([[], [], []]); // State to store multiple file objects

  const handleImageChange = (index, e) => {
    const files = Array.from(e.target.files);
    let updatedImages = [...images];
    updatedImages[index] = files;
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrls = [];
      const uploadPromises = images.map(async (imageList, index) => {
        if (imageList.length > 0) {
          const result = await Promise.all(imageList.map((image) => {
            return supabase.storage
              .from("images")
              .upload(`public/${Date.now()}_${image.name}`, image)
              .then(({ data, error }) => {
                if (error) throw error;
                return `https://nktogubqeimhncnpqjwk.supabase.co/storage/v1/object/public/images/${data.path}`;
              });
          }));
          imageUrls[index] = result;
        }
      });

      await Promise.all(uploadPromises);

      const { data, error } = await supabase.from("Furnitures").insert([
        {
          Name: name,
          Category: category,
          Description: description,
          Price: price,
          Material: material,
          Length: length,
          Breadth: breadth,
          Height: height,
          Image: imageUrls[0] ? imageUrls[0][0] : null,
          Image1: imageUrls[1] ? imageUrls[1][0] : null,
          Image2: imageUrls[2] ? imageUrls[2][0] : null,
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        await Swal.fire({
          icon: "success",
          title: "Furniture added successfully!",
          confirmButtonText: "OK",
        });
        setName("");
        setCategory("");
        setDescription("");
        setPrice("");
        setMaterial("");
        setLength("");
        setBreadth("");
        setHeight("");
        setImages([[], [], []]); // Reset the image state
      }
    } catch (err) {
      console.log("Error submitting data!", err);
    }
  };

  return (
    <div>
      <section className="mt-12">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-josefin text-xl md:text-3xl xl:text-4xl text-center">
              Add New Furniture
            </CardTitle>
            <CardDescription className="text-center">
              Fill out the form to add a new furniture item.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter furniture name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    id="category"
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sofa">Sofa</SelectItem>
                      <SelectItem value="table">Table</SelectItem>
                      <SelectItem value="chair">Chair</SelectItem>
                      <SelectItem value="bed">Bed</SelectItem>
                      <SelectItem value="dresser">Dresser</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter furniture description"
                  className="min-h-[100px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="material">Material</Label>
                  <Select
                    id="material"
                    value={material}
                    onValueChange={(value) => setMaterial(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wood">Wood</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="fabric">Fabric</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="leather">Leather</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="length">Length</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="Enter length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="Enter width"
                    value={breadth}
                    onChange={(e) => setBreadth(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image1">Image 1</Label>
                <Input
                  id="image1"
                  type="file"
                  onChange={(e) => handleImageChange(0, e)}
                />
                <Label htmlFor="image2">Image 2</Label>
                <Input
                  id="image2"
                  type="file"
                  onChange={(e) => handleImageChange(1, e)}
                />
                <Label htmlFor="image3">Image 3</Label>
                <Input
                  id="image3"
                  type="file"
                  onChange={(e) => handleImageChange(2, e)}
                />
              </div>
              <CardFooter className="flex justify-end">
                <Button type="submit">Save Furniture</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AddFurniture;
