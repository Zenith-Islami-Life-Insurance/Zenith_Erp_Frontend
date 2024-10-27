// import React, { useEffect, useState } from 'react';
// import { Checkbox, Label, Radio, Table } from "flowbite-react";
// import axios from 'axios';
// const PremiumInfo = () => {
//     const [proposalInfo, setProposalInfo] = useState([]);
//     const [proposalNo, setProposalNo] = useState("");

//     // get proposal informations
//   const handleProposalNo = (e) => {
//     const newValue = e.target.value;
//     setProposalNo(newValue);
//   };

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(
//               `http://115.127.36.173:5001/api/proposal-info?proposal_no=${proposalNo}`
//             );
//             setProposalInfo(response?.data);
//           } catch (error) {
//           } finally {
//           }
//         };
    
//         fetchData();
//       }, [proposalNo]);
//     return (
//         <div className="shadow-lg border lg:mx-48 mt-1 m-2">
//         <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
//           <div className="text-start px-2">
//             <div className="shadow border-2 rounded p-1 mt-2 mb-3">
//               <h2 className=" text-center font-bold text-success  p-2 rounded text-xs text-dark">
//                 PREMIUM CALCULATION
//               </h2>

//               <div class="p-0 mb-0 flex grid grid-cols-1 rounded  mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
//                 {proposalInfo[0]?.plan_desc ? (
//                   <div className="text-start px-2">
//                     <label className="text-start text-xs">Plan Name</label>
//                     <input
//                       type="text"
//                       id="success"
//                       value={proposalInfo[0]?.plan_desc}
//                       disabled
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       onChange={handlePlan}
//                     />
//                   </div>
//                 ) : (
//                   <div className="text-start px-2">
//                     <label className="text-start text-xs">PLAN LIST</label>
//                     <select
//                       onChange={handlePlan}
//                       className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                     >
//                       <>
//                         <option>Select Plan</option>
//                         {planList?.map((plan, i) => (
//                           <option
//                             key={i}
//                             value={`${plan?.plan_id}-${plan?.calcu_type}-${plan?.min_age}-${plan?.max_age}-${plan?.min_term}-${plan?.max_term}-${plan?.min_suminsured}-${plan?.max_suminsured}`}
//                           >
//                             {plan?.plan_id}-{plan?.plan_name}
//                           </option>
//                         ))}
//                       </>
//                     </select>
//                   </div>
//                 )}
//               </div>

//               <div class="p-1 mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
//                 <div className="w-full lg:w-full bg-white align-items-center pr-2 m-1  lg:mt-0">
//                   <label className="text-start text-xs">
//                     POLICY HOLDER AGE
//                   </label>
//                   <input
//                     type="text"
//                     id="success"
//                     value={calcuAge}
//                     disabled
//                     class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                     onChange={handlePremAge}
//                   />
//                 </div>
//                 <div className="col-span-2 bg-white align-items-center m-1  lg:mt-0">
//                   {proposalInfo[0]?.term ? (
//                     <div className="text-start px-2">
//                       <label className="text-start text-xs">
//                         {" "}
//                         TERM OF POLICY
//                       </label>
//                       <input
//                         type="text"
//                         id="success"
//                         value={proposalInfo[0]?.term}
//                         disabled
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                         onChange={handlePlan}
//                       />
//                     </div>
//                   ) : (
//                     <div>
//                       <label className="text-start text-xs">
//                         TERM OF POLICY
//                       </label>
//                       <select
//                         onChange={handleterm}
//                         className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       >
//                         <>
//                           <option>Select Term</option>
//                           {termList?.map((termm, i) => (
//                             <option key={i} value={termm?.term}>
//                               {termm?.term}
//                             </option>
//                           ))}
//                         </>
//                       </select>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
//                 {proposalInfo[0]?.instmode ? (
//                   <div className="text-start px-2">
//                     <label className="text-start text-xs">PAYMENT MODE</label>
//                     <input
//                       type="text"
//                       id="success"
//                       value={proposalInfo[0]?.instmode}
//                       disabled
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       onChange={handlePaymode}
//                     />
//                   </div>
//                 ) : (
//                   <div className=" bg-white align-items-center m-1  lg:mt-0">
//                     <label className="text-start text-xs">PAYMENT MODE</label>
//                     <select
//                       onChange={handlePaymode}
//                       className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                     >
//                       <>
//                         <option>Select Mode</option>
//                         {modeList?.map((mode, i) => (
//                           <option key={i} value={mode?.mode_code}>
//                             {mode?.mode_code}-{mode?.mode_name}
//                           </option>
//                         ))}
//                       </>
//                     </select>
//                   </div>
//                 )}
//               </div>
//               <div class="p-1 mb-8 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
//                 <div className="col-span-2 bg-white align-items-center m-1  lg:mt-0">
//                   <label className="text-start text-xs">
//                     TOTAL INSTALLMENT
//                   </label>
//                   {proposalInfo[0]?.totalinst ? (
//                     <input
//                       type="text"
//                       id="success"
//                       value={proposalInfo[0]?.totalinst}
//                       disabled
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   ) : (
//                     <input
//                       type="text"
//                       id="success"
//                       value={totalInstallment}
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   )}
//                 </div>
//                 <div className="w-full lg:w-full bg-white align-items-center m-1  lg:mt-0">
//                   <label className="text-start text-xs">AGE ADMITTED</label>
//                   <select
//                     // onChange={handlePaymode}
//                     className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                   >
//                     <>
//                       <option>Select AGE ADMITTED</option>
//                       <option value="Y">YES</option>
//                       <option value="N">NO</option>
//                     </>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="text-start mt-28 mb-2">
//               <div className="shadow border-2  m-0 rounded p-1">
//                 {calcuType === "P" && (
//                   <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
//                     <div className="w-full lg:w-full bg-white align-items-center m-1  lg:mt-0">
//                       <select
//                         // onChange={handlePaymode}
//                         className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       >
//                         <>
//                           <option>Select Premium</option>

//                           {premiumList?.map((prem, i) => (
//                             <option key={i} value={prem?.prem_amt}>
//                               Premium Tk-{prem?.premium}
//                             </option>
//                           ))}
//                         </>
//                       </select>
//                     </div>
//                   </div>
//                 )}

//                 <div class=" mb-0 flex grid grid-cols-3 rounded     mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
//                   <div className="bg-white align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-44 mt-3 p-0">
//                       SUM ASSURED
//                     </label>
//                     {proposalInfo[0]?.sum_insure ? (
//                       <input
//                         onChange={handleSumAssured}
//                         type="text"
//                         id="success"
//                         value={proposalInfo[0]?.sum_insure}
//                         disabled
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     ) : (
//                       <input
//                         onChange={handleSumAssured}
//                         type="text"
//                         id="success"
//                         value={sumAssured}
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     )}
//                   </div>

//                   <div className="bg-white  align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-16 mt-3 p-0">
//                       RATE
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       value={pRate}
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                   <div className="bg-white  align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-center w-16 mt-3 p-0">
//                       FACTOR
//                     </label>

//                     <input
//                       type="text"
//                       id="success"
//                       value={pFactor}
//                       class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                 </div>
//                 <div class=" mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
//                   <div className="bg-white  align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-40 mt-3 p-0">
//                       BASIC PREMIUM
//                     </label>
//                     {proposalInfo[0]?.premium ? (
//                       <input
//                         type="text"
//                         id="success"
//                         value={proposalInfo[0]?.premium}
//                         disabled
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         id="success"
//                         value={basicPrem}
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     )}
//                   </div>

//                   <div className="bg-white  align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-center w-36 mt-3 p-0">
//                       SUM AT RISK
//                     </label>
//                     {proposalInfo[0]?.sumatrisk ? (
//                       <input
//                         type="text"
//                         id="success"
//                         value={proposalInfo[0]?.sumatrisk}
//                         disabled
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         id="success"
//                         value={sumAtRisk}
//                         class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-start px-2">
//             <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
//               <div className="text-start  mb-4 m-1">
//                 <div className="shadow border-2 h-[215px]  m-0 rounded p-0">
//                   <div class=" mb-0 flex grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <div className="flex items-center gap-2">
//                         <Checkbox id="promotion" />
//                         <Label className="italic" htmlFor="promotion">
//                           Clear Supplementary
//                         </Label>
//                       </div>
//                     </div>
//                     <div className="flex bg-white align-items-center m-1  lg:mt-0">
//                       <label className="w-16 text-start mt-3 text-xs">
//                         SUPPL.
//                       </label>
//                       <select
//                         onChange={handleSupply}
//                         className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       >
//                         <>
//                           <option>Select Suppli.</option>
//                           {SupplementList?.map((suppl, i) => (
//                             <option key={i} value={suppl?.supp_code}>
//                               {suppl?.supp_name}
//                             </option>
//                           ))}
//                         </>
//                       </select>
//                     </div>

//                     <div className="flex bg-white align-items-center m-1  lg:mt-1">
//                       <label className="w-16 text-start mt-3 text-xs">
//                         CLASS
//                       </label>
//                       <select
//                         onChange={handleSuppliClass}
//                         className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                       >
//                         <>
//                           <option>Select Suppli. Class</option>
//                           {SupplementaryList?.map((supp, i) => (
//                             <option key={i} value={supp?.class_id}>
//                               {supp?.class_name}
//                             </option>
//                           ))}
//                         </>
//                       </select>
//                     </div>

//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <label className="text-xs text-start w-16 mt-3 p-0">
//                         RATE
//                       </label>
//                       <input
//                         type="text"
//                         id="success"
//                         value={suppliment_rate}
//                         class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     </div>

//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <label className="text-xs text-start w-16 mt-3 p-0">
//                         PREMIUM
//                       </label>
//                       <input
//                         type="text"
//                         value={sPrem}
//                         id="success"
//                         class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-start  mb-4 m-1">
//                 <div className="shadow h-[215px] border-2  m-0 rounded p-0">
//                   <div class=" mb-0 flex grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <div className="flex items-center gap-2">
//                         {/* Use the isChecked state for the checked attribute */}
//                         <input
//                           type="checkbox"
//                           checked={isChecked}
//                           onChange={handleCheckboxChange}
//                         />
//                         <Label className="italic" htmlFor="promotion">
//                           Clear Major Diaseas Rider
//                         </Label>
//                       </div>
//                     </div>
//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <label className="text-xs text-start w-24 mt-3 p-0">
//                         RATE
//                       </label>
//                       <input
//                         type="text"
//                         id="success"
//                         disabled
//                         value={riderRate ? riderRate : "0"}
//                         class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     </div>

//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <label className="text-xs text-start w-24 mt-3 p-0">
//                         PREMIUM
//                       </label>
//                       <input
//                         type="text"
//                         id="success"
//                         disabled
//                         value={riderPrem ? riderPrem : "0"}
//                         class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     </div>
//                   </div>
//                   <div class=" mb-0 flex grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <div className="flex items-center gap-2">
//                         {/* Use the isChecked state for the checked attribute */}
//                         <input
//                           type="checkbox"
//                           checked={iChecked}
//                           onChange={handleCheckboxxChange}
//                         />
//                         <Label className="italic" htmlFor="waiver">
//                           Clear Waiver Premium
//                         </Label>
//                       </div>
//                     </div>

//                     <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                       <label className="text-xs text-start w-48 mt-3 p-0">
//                         WAIVER PREMIUM
//                       </label>
//                       <input
//                         type="text"
//                         id="success"
//                         disabled
//                         value={premiumWaiver ? premiumWaiver : "0"}
//                         class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-start mb-4">
//               <div className="shadow-lg border m-1 rounded p-1">
//                 <h2 className="text-xs font-bold ml-2">
//                   IPD TREATEMENT RIDER
//                 </h2>
//                 <div className="bg-white flex justify-center m-1  lg:mt-0">
//                   <div className="flex items-center gap-2">
//                     <Checkbox id="promotion" />
//                     <Label className="italic" htmlFor="promotion">
//                       Clear IPD Rider
//                     </Label>
//                   </div>
//                 </div>
//                 <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="w-24 text-start mt-3 text-xs">
//                       PLAN PREM
//                     </label>
//                     <select
//                       onChange={handleIpdplan}
//                       className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
//                     >
//                       <>
//                         <option>SELECT PLAN PREM</option>
//                         {premPlanlist?.map((planList, i) => (
//                           <option key={i} value={planList?.plan_no}>
//                             {planList?.plan_name}
//                           </option>
//                         ))}
//                       </>
//                     </select>
//                   </div>
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-48 mt-3 p-0">
//                       START FROM
//                     </label>

//                     <input
//                       type="text"
//                       id="success"
//                       value={risk_date}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                 </div>
//                 <div class=" mb-0 flex grid grid-cols-3 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-32 mt-3 p-0">
//                       PREM RATE
//                     </label>

//                     <input
//                       type="text"
//                       id="success"
//                       value={IpdPremRate ? IpdPremRate : "0"}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>

//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-24 mt-3 p-0">
//                       BENIFITS
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       value={0}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>

//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-24 mt-3 p-0">
//                       END AT
//                     </label>

//                     <input
//                       type="text"
//                       id="success"
//                       value={endAtdateFormatted ? endAtdateFormatted : "-"}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="text-start mb-4">
//               <div className="shadow-lg border m-1 rounded p-1">
//                 <h2 className="text-xs font-bold ml-2">EXTRA PREMIUM</h2>

//                 <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-80 mt-3 p-0">
//                       OE RATE & PREM
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       disabled
//                       value={oeRate ? oeRate : "0"}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                     <input
//                       type="text"
//                       id="success"
//                       disabled
//                       value={oePrem ? oePrem : "0"}
//                       class="form-input text-xs shadow border-[#E3F2FD] ml-1 mt-1 w-full"
//                     />
//                   </div>

//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-3/4 mt-3 p-0">
//                       H. RATE & PREM
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       disabled
//                       value={hosRate ? hosRate : 0}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                     <input
//                       type="text"
//                       id="success"
//                       disabled
//                       value={hosPrem ? hosPrem : 0}
//                       class="form-input text-xs shadow border-[#E3F2FD] ml-1 mt-1 w-full"
//                     />
//                   </div>
//                 </div>
//                 <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs text-start w-36 mt-3 p-0">
//                       EXT. PREM
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>

//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-xs font-bold text-start w-32 mt-3 p-0">
//                       TOTAL EXTRA
//                     </label>

//                     <input
//                       type="text"
//                       id="success"
//                       disabled
//                       value={extraTotalPrem ? extraTotalPrem : "0"}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-start mb-4">
//               <div className="shadow-lg border m-1 rounded p-1">
//                 <h2 className="text-xs font-bold ml-2">
//                   OPTION & POLICY STATUS
//                 </h2>

//                 <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className=" flex gap-2">
//                     <div className="flex items-center gap-2">
//                       <Radio
//                         id="uk"
//                         name="countries"
//                         value="1"
//                         // Check the radio button if policyType is '1'
//                       />
//                       <Label htmlFor="uk">A</Label>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Radio id="uk" name="countries" value="10" />
//                       <Label htmlFor="uk">B</Label>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Radio id="uk" name="countries" value="13" />
//                       <Label htmlFor="uk">C</Label>
//                     </div>
//                   </div>
//                   <div className=" flex gap-2">
//                     <div className="flex items-center gap-2">
//                       <Radio
//                         id="ukS"
//                         name="CS"
//                         value="1"
//                         // Check the radio button if policyType is '1'
//                       />
//                       <Label htmlFor="ukS">STANDARD</Label>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Radio id="ukS" name="CS" value="10" />
//                       <Label htmlFor="ukS">SUBSTANDARD</Label>
//                     </div>
//                   </div>
//                   <div className="bg-white flex align-items-center m-1  lg:mt-0">
//                     <label className="text-sm font-bold text-start ml-5 w-48 mt-3 p-0">
//                       TOTAL PREM.
//                     </label>
//                     <input
//                       type="text"
//                       id="success"
//                       value={totalAllPrem ? totalAllPrem : "0"}
//                       class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
//                     />
//                   </div>
//                 </div>

//                 <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
//                   <div className=" flex gap-2">
//                     <div className="flex items-center gap-2">
//                       <Radio
//                         id="ukS"
//                         name="CS"
//                         value="1"
//                         // Check the radio button if policyType is '1'
//                       />
//                       <Label htmlFor="ukS">MEDICAL</Label>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Radio id="ukS" name="CS" value="10" />
//                       <Label htmlFor="ukS">NON MEDICAL</Label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <button
//             onClick={handleUpdate}
//             type="submit"
//             class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//           >
//             SUBMIT
//           </button>
//         </div>
//       </div>
//     );
// };

// export default PremiumInfo;