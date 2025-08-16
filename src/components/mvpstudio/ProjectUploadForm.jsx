import React, { useState } from 'react'
import {db, storage } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from '../Navbar';


const initialExpert = { expertfirstname: "", expertsecondname: "", role: "", instagram: "", linkedin: "", whatsapp: "", facebook: "", x: "", expertimg: null };

const ProjectUploadForm = () => {
    const [form, setForm] = useState({
    tab: "All Projects",
    category: "",
    title: "",
    desc: "",
    img: null,
    img1: null,
    img2: null,
    img3: null,
    explorelink: "",
    experts: [{ ...initialExpert }],
  });
  const [uploading, setUploading] = useState(false);
  const MAX_FILE_SIZE_BYTES = 1 * 548 * 548; //this is for 300KB
  //variable for button add limits
  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 7

  //clears the form after submit
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
        alert('File size exceeds the limit of 300KB. Please choose a smaller file.');
        e.target.value = ''; //this clears the selected file
        return;
      }
      //proceed with file processing or upload
      console.log('File selected:', selectedFile.name, 'Size:', selectedFile.size, 'bytes');
    }
  };

  //disable enter key on text area
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      console.log('Enter key pressed and prevented!');
    }
  };

  const handleExpertChange = (idx, e) => {
    const { name, value, files } = e.target;
    const updated = [...form.experts];
    if (files) {
      updated[idx][name] = files[0];
    } else {
      updated[idx][name] = value;
    }
    setForm({ ...form, experts: updated });

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
        alert('File size exceeds the limit of 300KB. Please choose a smaller file.');
        e.target.value = ''; //this clears the selected file
        return;
      }
      //proceed with file processing or upload
      console.log('File selected:', selectedFile.name, 'Size:', selectedFile.size, 'bytes');
    }
  };

  const addExpert = () => {
    //to limit the number of experts added
    if (clickCount < maxClicks) {
    setClickCount(prevCount => prevCount + 1);
    setForm({ ...form, experts: [...form.experts, { ...initialExpert }] });
    }
     else {
      alert('You have reached the maximum limit of 8 additions!');
    }
  };

  const removeExpert = (idx) => {
    const updated = form.experts.filter((_, i) => i !== idx);
    setForm({ ...form, experts: updated });
  };

  // Helper to upload a single file and return its download URL
  const uploadFile = async (file, path) => {
    if (!file) return "";
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      // Upload project images
      const imgUrls = {};
      for (const key of ["img", "img1", "img2", "img3"]) {
        imgUrls[key] = await uploadFile(form[key], "projects");
      }
      // Upload expert images
      const expertsWithUrls = await Promise.all(
        form.experts.map(async (expert, idx) => ({
          ...expert,
          expertimg: await uploadFile(expert.expertimg, `experts`)
        }))
      );
      // Save to Firestore
      await addDoc(collection(db, "projects"), {
        ...form,
        ...imgUrls,
        experts: expertsWithUrls,
        createdAt: serverTimestamp(), //this will add a timestamp for sorting purposes
        img: imgUrls.img,
        img1: imgUrls.img1,
        img2: imgUrls.img2,
        img3: imgUrls.img3,
      });
      alert("Project uploaded!");
      setForm({
        tab: "All Projects",
        category: "",
        title: "",
        desc: "",
        img: null,
        img1: null,
        img2: null,
        img3: null,
        explorelink: "",
        experts: [{ ...initialExpert }],
      });
    } catch (err) {
      alert("Upload failed: " + err.message);
    }
    setUploading(false);
  };

  return (
    <> 
    <section className='relative h-[100%]'>
      <div className='mvpuploadgradient -z-12 isolate w-full pb-15'>
        <Navbar/>
        <img src="/talentsbg.png" className='w-full h-auto object-cover absolute top-100 md:top-50 left-0 -z-11 isolate' />
        <div className='pt-20 p-5'>
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-lg shadow flex flex-col gap-4 mt-[40px] z-5 text-sm p-10">
      <h2 className="text-xl font-bold text-center">Upload New MVP Project</h2>
      <h3 className="font-medium mb-2 text-center max-sm:text-sm text-lg">**All uploaded images must be below 300KB**</h3>
      <label>Select Tab
        <select name="tab" value={form.tab} onChange={handleChange} required className="border p-2 rounded w-full">
          <option className='text-gray-400'>Select Tab</option>
          <option>Web App</option>
          <option>Mobile App</option>
        </select>
      </label>
      <label className='max-sm:text-[12px]'>Choose the category where your MVP belongs
        <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded w-full" required>
            <option className='text-gray-400'>Choose Category</option>
            <option>AgricTech</option>
            <option>HealthTech</option>
            <option>FinTech</option>
            <option>EdTech</option>
            <option>E-Commerce</option>
            <option>AI</option>
            <option>Hospitality</option>
            <option>Events</option>
        </select>
      </label>
      <label className='max-sm:text-[12px]'>The Title of Your MVP <span className='text-[10px] md:text-[12px] text-gray-400'>(Max 35 Characters)</span>
        <input name="title" 
        maxLength={35}
        value={form.title} 
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        className="border p-2 rounded w-full"
        placeholder='Input the title of your MVP eg. Agro Tech: a web base Agro platform'
        required />
      </label>
      <label className='max-sm:text-[12px]'>Description of Your MVP
        <textarea name="desc"
        maxLength={300}  //limits characters to 200
        onKeyDown={handleKeyDown}
        value={form.desc} 
        onChange={handleChange} 
        className="border p-2 rounded w-full" 
        placeholder='Write a concise description of your MVP'
        rows='3'
        required />
        <p>Characters remaining: {300 - form.desc.length}</p>
      </label>
      <label className='max-sm:text-[12px]'>Input the First Image Screenshot of Your MVP <input type="file" name="img" accept="image/*" onChange={handleChange} className="border p-2 rounded mvpuploadgradient w-full cursor-pointer"  required /></label>
      <label className='max-sm:text-[12px]'>Input the Second Image Screenshot of Your MVP <input type="file" name="img1" accept="image/*" onChange={handleChange} className="border p-2 rounded mvpuploadgradient w-full cursor-pointer" required /></label>
      <label className='max-sm:text-[12px]'>Input the Third Image Screenshot of Your MVP <input type="file" name="img2" accept="image/*" onChange={handleChange} className="border p-2 rounded mvpuploadgradient w-full cursor-pointer" required /></label>
      <label className='max-sm:text-[12px]'>Input the Fourth Image Screenshot of Your MVP <input type="file" name="img3" accept="image/*" onChange={handleChange} className="border p-2 rounded mvpuploadgradient w-full cursor-pointer" required /></label>
      <label className='max-sm:text-[12px]'>The Working Link to your MVP <input name="explorelink" value={form.explorelink} onChange={handleChange} className="border p-2 rounded w-full" required
      placeholder='Begin with https://' /></label>
      <div>
        <h3 className="font-semibold mb-2 text-[12px]">Add Details and Image of the Experts who worked on the MVP</h3>
        {form.experts.map((expert, idx) => (
          <div key={idx} className="border p-2 mb-2 rounded flex flex-col gap-1">
            <input name="expertfirstname" placeholder="First Name" value={expert.expertfirstname} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" required />
            <input name="expertsecondname" placeholder="Second Name" value={expert.expertsecondname} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" required />
            <input name="role" placeholder="Expert Role" value={expert.role} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" required />
            <label className='text-[12px]'>Input the Expert`s Close-up Portrait</label>
            <input type="file" name="expertimg" accept="image/*" onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded mvpuploadgradient w-full cursor-pointer" required />
            <label className='text-[12px]'>Additional Information (Optional)</label>
            <input name="linkedin" placeholder="Expert's linkedin account link" value={expert.linkedin} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" />
            <input name="whatsapp" placeholder="Expert's whatsapp account link" value={expert.whatsapp} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" />
            <input name="instagram" placeholder="Expert's instagram account link" value={expert.instagram} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" />
            <input name="facebook" placeholder="Expert's facebook account link" value={expert.facebook} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" />
            <input name="x" placeholder="Expert's X(twitter) account link" value={expert.x} onChange={e => handleExpertChange(idx, e)} className="border p-1 rounded" />
            {form.experts.length > 1 && (
              <button type="button" onClick={() => removeExpert(idx)} className="text-red-500 text-xs">Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addExpert} className="bg-blue-100 px-2 py-1 rounded text-blue-700 text-xs mt-1">Add Expert</button>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Project"}
      </button>
    </form>
    </div>
    </div>
    </section>
    </>
  );
};

export default ProjectUploadForm