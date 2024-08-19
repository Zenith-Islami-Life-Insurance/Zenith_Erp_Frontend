import React, { useEffect, useState } from "react";
import Navbar from "../../Nabar/Navbar";
import { Checkbox, Label, Radio, Table } from "flowbite-react";
import {
  useGetAgentlistQuery,
  useGetBankListQuery,
  useGetBankbranchlistQuery,
  useGetBranchlistQuery,
  useGetCountrylistQuery,
  useGetDistrictlisttQuery,
  useGetEducationListQuery,
  useGetReligionListQuery,
  useGetGenderQuery,
  useGetLocallityQuery,
  useGetModelistQuery,
  useGetOccupationlistQuery,
  useGetPlanlistQuery,
  useGetPostofficelistQuery,
  useGetPremiumListQuery,
  useGetProjectlistQuery,
  useGetSupplimentClassListQuery,
  useGetSupplimentListQuery,
  useGetThanalistQuery,
  useGetallTypeListQuery,
} from "../../../features/api/proposal";
import axios from "axios";
import swal from "sweetalert";

const Index = () => {
  const [projectId, setProjectId] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStaus] = useState("");
  const [agentValue, setAgentValue] = useState("");
  const [proposalNo, setProposalNo] = useState("");
  const [chainlist, setChainList] = useState([]);
  const [proposalInfo, setProposalInfo] = useState([]);

  const [policyInfo, setPolicyInfo] = useState([]);

  const [proposal_date, setProposalDate] = useState(proposalInfo[0]?.proposal_date || '');
  const [birth_date, setBirthDate] = useState(proposalInfo[0]?.risk_date || '');
  const [resident, setResident] = useState();
  const [district, setDistrict] = useState();
  const [thana, setThana] = useState();
  const [postOffice, setPostoffice] = useState();
  const [pdistrict, setPDistrict] = useState();
  const [pthana, setPThana] = useState();
  const [ppostOffice, setPPostoffice] = useState();
  const [policytype, setPolicyType] = useState(1);
  const [risk_date, setRiskdate] = useState();
  const [proposerName, setProposer] = useState();
  const [fatherName, setFather] = useState();
  const [husbandName, setHusband] = useState();
  const [motherName, setMother] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [nid, setNID] = useState();
  const [age, setAge] = useState();
  const [occupation, setOccupation] = useState();
  const [branch, setBranch] = useState();
  const [educationName, setEducation] = useState();
  const [eduId, setEduId] = useState();
  console.log(eduId);
  const [religion, setReligion] = useState();
  const [country, setCountry] = useState();
  const [newProposalNo, setNewProposalNo] = useState();
  const [commencementDate, setUpdateCommDate] = useState();
  const [planName, setPlan] = useState();
  const [premage, setPremAge] = useState();
  const [termList, setTermList] = useState([""]);
  const [calAge, setCalage] = useState();
  const [pmode, setPaymode] = useState(0);
  const [paymentMode, setPaymentMode] = useState('4');
  const [t_installment, setInstallment] = useState();
  const [selectTerm, setTerm] = useState();
  const [calcuType, setCalcuType] = useState();
  const [rate, setRate] = useState();
  const [bankCode, setBankCode] = useState();
  const [suplimentary, setSuplimentary] = useState();
  const [major_diseage, setMajordiseage] = useState();
  const [prem_waiver, setPremWaiver] = useState();
  const [impatient_reader, setImpatientReader] = useState();
  const [extra_loading, setExtraLoading] = useState();
  const [minAge, setMinage] = useState();
  const [maxAge, setMaxAge] = useState();
  const [minTerm, setMinterm] = useState();
  const [maxTerm, setMaxterm] = useState();
  const [maxSumInsure, setMaxSumInsure] = useState();
  const [minSumInsure, setMinSumInsure] = useState();
  const [supplimentId, setSuppli] = useState();
  const [supplimentClass, setSuppliClass] = useState('Select Suppli. Class');
  const [sumAssured, setSumassured] = useState();
  const [suppPremium, setSuppPrem] = useState([]);
  const [basicPremium, setBasicPrem] = useState([]);
  const [getBasicPremium, setBasicPremium] = useState('');
  const [sumassurance, setSumassurance] = useState([]);
  const [sumAtrisk, setSumAtRisk] = useState([]);
  const [premPlanlist, setPremPlanlist] = useState([]);
  const [endAtDate, setEndatDate] = useState([]);
  const [ipdPremRate, setIpdPlanRate] = useState([]);
  const [premOccupRate, setPremOccupRate] = useState([""]);
  console.log(premOccupRate)
  const [hospitalPremRate, setHospitalRatePrem] = useState([""]);
  const [premWaiver, setWaiverPrem] = useState([]);
  const [mdrPremium, setMdrPremium] = useState([]);
  const [mdrRate, setMdrRate] = useState([]);
  console.log(mdrPremium, mdrRate)
  const [eduStatus, setEducationStatus] = useState();
  const [policyNo, setPolicyNo] = useState();
  const [marriage_date, setMarriageDate] = useState();
  const [eduName, setEducationName] = useState();
  const [getPolicyNumber, setGetPolicyNo] = useState();
  const [proposalFirstPage, setProposalFristPage] = useState('');

  const [ipdPlanNo, setIpdplanNo] = useState();
  const [isChecked, setIsChecked] = useState(true);
  const [riderPremRate, setRiderPremRate] = useState([]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // Set the riderPremRate based on the checkbox state
    if (isChecked === false) {
      setRiderPremRate(0);
    }
  };

  const [iChecked, setIChecked] = useState(true);
  const [suppliRate, setSuppliRate] = useState([]);
  console.log(suppliRate)
  const handleCheckboxxChange = () => {
    setIChecked(!iChecked);
    // Set the riderPremRate based on the checkbox state
    if (!iChecked) {
      setSuppliRate(0);
    }
  };

  const [birth_dateE, setBirthDateE] = useState();

  const totalInstallment = t_installment?.total_install[0];
  // console.log(totalInstallment);
  const calcuAge = calAge?.age[0];
  const sPrem = Math.ceil(suppPremium[0]?.premium);
  const basicPrem = basicPremium[0]?.basic_premium;
  const sumAtRisk = sumAtrisk[0]?.sum_at_risk;
  const IpdPremRate = ipdPremRate[0]?.ipd_prem_rate;
  const riderPrem = riderPremRate[0]?.prem;
  const riderRate = riderPremRate[0]?.rate;
  // const oEPremRate = oePremRate[0]?.oe_ratePrem;
  const hosPremRate = hospitalPremRate[0]?.hos_ratePrem;
  console.log(hosPremRate)

  const pol_i = policyInfo[0]?.policy_no;
  const pol_proposer = policyInfo[0]?.proposer;
  const pol_riskdate = policyInfo[0]?.risk_date;
  const pol_suminsure = policyInfo[0]?.sum_insure;

  // const [oeRate, oePrem] = oEPremRate ? oEPremRate.split("_") : "0";
  // const [hosRate, hosPrem] = hosPremRate ? hosPremRate.split("_") : "0";
  const suppliment_rate = suppliRate[0]?.supp_rate;
  const premiumWaiver = premWaiver[0]?.waiver_prem;
  console.log(premiumWaiver)

  const pRate = rate?.[0]?.toFixed(2);
  const pFactor = rate?.[1]?.toFixed(2);


  // console.log(pRate, pFactor);

  // useEffect(() => {
  //   // Check if minAge is greater than maxAge
  //   if (calcuAge < minAge) {
  //     alert(`This plan does not support age below ${minAge}`);
  //     setPlan("");
  //   }
  //   // Check if calcuAge is greater than maxAge
  //   else if (calcuAge > maxAge) {
  //     alert(`This plan does not support age above ${maxAge}`);
  //     setPlan("");
  //   }
  // }, [minAge, maxAge, calcuAge]);

  // useEffect(() => {
  //   if (sumAssured < minSumInsure) {
  //     alert(`This plan does not support sum issure below ${minSumInsure}`);
  //   } else if (sumAssured > maxSumInsure) {
  //     alert(`This plan does not support sum issure above ${maxSumInsure}`);
  //   }
  // }, [sumAssured, minSumInsure, maxSumInsure]);

  const UserD = JSON.parse(localStorage.getItem("UserDetails"));
  const USER_ID = UserD?.PERSONALID;
  const USER_TYPE = UserD?.USER_TYPE

  const formatAsMMDDYYYY = (dateString) => {
    const dateObj = new Date(dateString);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(dateObj.getDate()).padStart(2, "0"); // Add leading zero if needed
    const year = dateObj.getFullYear();
    return `${year}${month}${day}`;
  };

  const formatAsMMDDYYYYy = (dateString) => {
    const dateObj = new Date(dateString);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(dateObj.getDate()).padStart(2, "0"); // Add leading zero if needed
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // current date (date: 7/7/2024)---Start ----
  const [currentDates, setCurrentDate] = useState('');
  const currentDate = formatAsMMDDYYYY(currentDates)

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // Change the formatting as needed
    setCurrentDate(formattedDate);
  }, []);
  // -------------END-------------
  const comm_datee = formatAsMMDDYYYY(risk_date);
  const endAtdateFormatted = formatAsMMDDYYYYy(endAtDate[0]?.endAtDate);
  console.log(birth_date)
  const dob = formatAsMMDDYYYY(birth_date);
  console.log(comm_datee, dob)

  const handleClearClick = () => {
    window.location.reload(); // Remove this line if present
  };
  // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleClearPolicydata = () => {
    setPolicyInfo("");
  };

  const handleIpdplan = (e) => {
    setIpdplanNo(e.target.value);
  };

  const handleSumAssured = (e) => {
    setSumassured(e.target.value);
  }

  const handleSupply = (e) => {
    setSuppli(e.target.value);
  };

  const handleSuppliClass = (e) => {
    setSuppliClass(e.target.value);
  };
  const handleBankCode = (e) => {
    setBankCode(e.target.value);
  };

  const handleterm = (e) => {
    console.log(e.target.value)
    setTerm(e.target.value);
  };
  const handlePaymode = (e) => {
    setPaymode(e.target.value);
  };
  const handlePaymentMode = (e) => {
    setPaymentMode(e.target.value);
  };


  const handlePremAge = (e) => {
    setPremAge(e.target.value);
  };

  const handlePlan = (e) => {
    const value = e.target.value;
    console.log(value)
    const [
      planId,
      calcuType,
      suplimentary,
      extra_loading,
      major_diseage,
      impatient_reader,
      prem_waiver,
      min_age,
      max_age,
      min_term,
      max_term,
      min_suminsured,
      max_suminsured,
    ] = value.split("-");
    console.log(calcuType)
    setPlan(planId);
    setCalcuType(calcuType);
    setSuplimentary(suplimentary);
    setPremWaiver(prem_waiver);
    setImpatientReader(impatient_reader);
    setExtraLoading(extra_loading);
    setMajordiseage(major_diseage);
    setMinage(min_age);
    setMaxAge(max_age);
    setMinterm(min_term);
    setMaxterm(max_term);
    setMaxSumInsure(max_suminsured);
    setMinSumInsure(min_suminsured);
    setSupplementList([])
    setClassList([])
    setSuppPrem([])
    setSuppliRate([])
    setSuppliClass()
  };
  console.log(sPrem)
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleMaritalStatus = (e) => {
    setMaritalStaus(e.target.value);
  };

  const handleReligion = (e) => {
    setReligion(e.target.value);
  };
  const handleEducation = (e) => {
    const values = e.target.value;
    const [education_id, education_name] = values.split("-");
    setEduId(education_id);
    // console.log(education_name);
    setEducation(e.target.value);
  };

  const handleEducationStatus = (e) => {
    setEducationStatus(e.target.value);
  };

  const handleBranch = (e) => {
    setBranch(e.target.value);
  };
  const handleOccupation = (e) => {
    setOccupation(e.target.value);
    setSupplementList([])
    setClassList([])
    setSuppPrem([])
    setSuppliRate([])
    setSuppliClass()
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    if (proposalInfo[0]?.dob) {
      setBirthDateE(formatAsMMDDYYYYy(proposalInfo[0]?.dob));
    }
  }, [proposalInfo]);

  const handleNid = (e) => {
    setNID(e.target.value);
  };

  useEffect(() => {
    if (proposalInfo[0]?.nid_number) {
      setNID(proposalInfo[0]?.nid_number);
    }
  }, [proposalInfo]);

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  useEffect(() => {
    if (proposalInfo[0]?.mobile) {
      setMobile(proposalInfo[0]?.mobile);
    }
  }, [proposalInfo]);

  //address part  Start
  const [permanentAddress, setPermanentAddress] = useState('');
  const [isAddressChecked, setIsAddressChecked] = useState(false);
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsAddressChecked(checked);
    if (checked) {
      setPermanentAddress(address);
    } else {
      setPermanentAddress('');
    }
  };
  //  address part end

  // education document start---
  const [isEduDocChecked, setIsEduDocChecked] = useState(false);

  const handleEduDocChange = (e) => {
    setIsEduDocChecked(e.target.checked);
  };
  // education document end---

  useEffect(() => {
    if (proposalInfo[0]?.address1) {
      setAddress(proposalInfo[0]?.address1);
    }
  }, [proposalInfo]);

  const handleMotherName = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setMother(updatedValue);
  };

  useEffect(() => {
    if (proposalInfo[0]?.mothers_name) {
      setMother(proposalInfo[0]?.mothers_name);
    }
  }, [proposalInfo]);

  const handleHusband = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setHusband(updatedValue);
  };

  useEffect(() => {
    if (proposalInfo[0]?.fatherhusb) {
      setHusband(proposalInfo[0]?.fatherhusb);
    }
  }, [proposalInfo]);

  const handleFather = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setFather(updatedValue);
  };

  useEffect(() => {
    if (proposalInfo[0]?.fathers_name) {
      setFather(proposalInfo[0]?.fathers_name);
    }
  }, [proposalInfo]);

  const handleGetProposer = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setProposer(updatedValue);
  };

  useEffect(() => {
    if (proposalInfo[0]?.proposer) {
      setProposer(proposalInfo[0]?.proposer);
    }
  }, [proposalInfo]);
  //handle marriage data change
  const handleMarrigeDate = (e) => {
    setMarriageDate(e.target.value);
  }
  //handle EducationName
  const handleEducationName = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setEducationName(updatedValue);
  }

  // handle policytype change 
  const handlePolicyTypeChange = (e) => {
    const newPolicyType = e.target.value;
    setPolicyType(newPolicyType);
    setProposalDate(''); // Reset proposal date
    setRiskdate(''); // Reset risk date
  };
  // updated from chatgpt
  // const handlePolicyTypeChange = (e) => {
  //   const newPolicyType = e.target.value;
  //   console.log("New Policy Type:", newPolicyType);
  //   console.log("Proposal Info:", proposalInfo);

  //   if (proposalInfo[0]?.policy_type) {
  //     console.log("Using existing policy type from proposalInfo");
  //     setPolicyType(proposalInfo[0].policy_type);
  //   } else {
  //     console.log("Using new policy type from input");
  //     setPolicyType(newPolicyType);
  //   }

  //   setProposalDate(''); // Reset proposal date
  //   setRiskDate(''); // Reset risk date
  // };

  const handleproposalDateChange = (event) => {
    const newProposalDate = event.target.value;
    console.log(newProposalDate)
    setProposalDate(newProposalDate);

    // Automatically set the risk date to the proposal date
    if (!proposalInfo[0]?.risk_date) {
      setRiskdate(newProposalDate);
    }
  };

  const handleriskDateChange = (event) => {
    console.log(event.target.value)
    setRiskdate(event.target.value);
  };

  useEffect(() => {
    if (proposalInfo[0]?.proposal_date) {
      setProposalDate(formatAsMMDDYYYYy(proposalInfo[0]?.proposal_date));
    }
  }, [proposalInfo]);
  useEffect(() => {
    if (proposalInfo[0]?.risk_date) {
      setRiskdate(formatAsMMDDYYYYy(proposalInfo[0]?.risk_date));
    }
  }, [proposalInfo]);

  useEffect(() => {
    if (proposalInfo[0]?.marital_status) {
      setMaritalStaus(proposalInfo[0]?.marital_status);
    }
  }, [proposalInfo]);

  useEffect(() => {
    if (proposalInfo[0]?.sex) {
      setGender(proposalInfo[0]?.sex);
    }
  }, [proposalInfo]);

  useEffect(() => {
    if (proposalInfo[0]?.pd_code) {
      setProjectId(proposalInfo[0]?.pd_code);
    }
  }, [proposalInfo]);

  useEffect(() => {
    if (proposalInfo[0]?.agent_id) {
      setAgentValue(proposalInfo[0]?.agent_id);
    }
  }, [proposalInfo]);

  const proposer = proposalInfo[0]?.proposer;
  // get proposal informations
  const handleProposalNo = (e) => {
    const newValue = e.target.value;
    setProposalNo(newValue);
  };

  const handlePolicyNo = (e) => {
    const newValue = e.target.value;
    setPolicyNo(newValue);
  };

  const handlePolicyNumber = (e) => {
    setGetPolicyNo(e.target.value);
  };

  // get proposal informations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/policy-info?policy_no=${policyNo}`
        );
        setPolicyInfo(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [policyNo]);
  // get proposal informations
  // get proposal informations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/proposal-info?proposal_no=${proposalNo}`
        );
        setProposalInfo(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [proposalNo]);
  // get proposal informations

  // get End At date informations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/endAtDate/${comm_datee}`
        );
        setEndatDate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [comm_datee]);
  // get End At date informations

  //total installment
  useEffect(() => {
    const InstallmentData = async () => {
      const url = `http://localhost:5001/api/total-installment/${pmode}/${selectTerm}`;
      try {
        const response = await axios.get(url);
        setInstallment(response?.data);
      } catch (error) {
      } finally {
      }
    };

    InstallmentData();
  }, [pmode, selectTerm]);
  // total installment 

  // get prem plan list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/prem-plan-list/${sumAssured}
            `
        );
        setPremPlanlist(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [sumAssured]);
  //  get prem plan list

  // get chainlist
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/chain-list/${projectId}/${agentValue}`
        );
        setChainList(response?.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, [projectId, agentValue]);
  // get chainlist



  // get rate calculation

  // get age
  useEffect(() => {
    const fetchData = async () => {
      const abc = `http://localhost:5001/api/get-age/${comm_datee}/${birth_dateE ? birth_dateE : dob
        }`;
      try {
        const response = await axios.get(abc);
        setCalage(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [comm_datee, birth_dateE, dob]);

  const [childDob, setChildDob] = useState(() => new Date().toISOString().split('T')[0]);
  const handleChildBirthChange = (e) => {
    setChildDob(e.target.value);
  };
  const [childAge, setChildAge] = useState();
  const childFinalAge = childAge?.age[0]
  console.log(childFinalAge)
  const cDob = formatAsMMDDYYYY(childDob)
  // get child age
  useEffect(() => {
    const fetchChildAge = async () => {
      const childAgeUrl = `http://localhost:5001/api/get-age/${comm_datee}/${cDob}`;
      try {
        const response = await axios.get(childAgeUrl);
        setChildAge(response?.data);
      } catch (error) {
        console.error("Error fetching child's age:", error);
      }
    };

    fetchChildAge();
  }, [comm_datee, childDob]);

  // get rate calculation
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/rate-calculation/${calcuAge}/${selectTerm}/${planName}/${childFinalAge}`
        );
        setRate(response?.data?.rate);
      } catch (error) {
        console.error("Error fetching rate calculation:", error);
      }
    };

    fetchData();
  }, [calcuAge, selectTerm, planName, childFinalAge]);


  // get term-list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/term-list/${planName}/${calcuAge}`
        );
        setTermList(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, calcuAge]);
  // get chainlist

  // get new proposal Number
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/proposal-number?OFFICE_CODE=${branch}`
        );
        setNewProposalNo(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [branch]);
  //get new proposal Number

  // get commencement date
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/comm_date/${currentDate}/${policytype}`
        );
        setUpdateCommDate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [comm_datee, policytype]);
  // get commencement date

  // get suppliment premium
  console.log(planName, occupation, supplimentId, supplimentClass, sumAssured, paymentMode)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/suppliment-premium/${planName}/${occupation}/${supplimentId}/${supplimentClass}/${sumAssured}/${paymentMode}`
        );
        setSuppPrem(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, occupation, supplimentId, supplimentClass, sumAssured, pmode]);
  //get suppliment premium

  // get sum assurance
  console.log(planName, selectTerm, calcuAge, +pmode)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/sumAssurance/${planName}/${selectTerm}/${calcuAge}/${+pmode}/${0}`
        );
        setSumassurance(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, calcuAge, pmode]);
  // get basic premium
  console.log(planName, selectTerm, calcuAge, paymentMode, sumAssured)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/basic-premium/${planName}/${selectTerm}/${calcuAge}/${paymentMode}/${sumAssured}/A/${0}/Y`
        );
        setBasicPrem(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, calcuAge, paymentMode, sumAssured]);
  //get basic premium

  // get sum at risk
  console.log(planName, sumassurance[0] || sumAssured, basicPrem || pmode, pFactor, paymentMode)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/sumat-risk/${planName}/${sumassurance[0] || sumAssured}/${basicPrem || pmode}/${pFactor}/${paymentMode}
          `
        );
        setSumAtRisk(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, sumAssured, basicPrem, pmode, sumassurance[0], pFactor, paymentMode]);
  // get sum at risk

  // get idp premium rate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/ipd-prem-rate/${ipdPlanNo}/${dob}/${comm_datee}/${pmode}/${planName}`
        );
        setIpdPlanRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [ipdPlanNo, dob, comm_datee, pmode, planName]);
  // get idp premium rate

  // get rider premium rate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/rider-prem-rate/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${pmode}`
        );
        setRiderPremRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, dob, comm_datee, sumAssured, pmode]);
  // get rider premium rate

  // get waiver premium

  // get supplimentary rate
  console.log(occupation, supplimentId, supplimentClass, paymentMode)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/suppli-rate/${occupation}/${supplimentId}/${supplimentClass}`
        );
        setSuppliRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [occupation, supplimentId, supplimentClass, paymentMode]);
  // get supplimentary rate



  // get Hospital prem rate
  // console.log(planName, occupation, gender, sumAssured, eduStatus, eduStatus, paymentMode)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5001/api/hospital-premrate/${planName}/${occupation}/${gender}/${sumAssured}/${eduStatus}/${eduStatus}/${paymentMode}`
  //       );
  //       setHospitalRatePrem(response?.data);
  //     } catch (error) {
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, [planName, occupation, gender, sumAssured, eduStatus, pmode]);
  //get Hospital prem rate

  // const extraTotalPrem =
  //   parseInt(premiumWaiver, 0) +
  //   parseInt(sPrem, 0) +
  //   parseInt(oePrem, 0) +
  //   parseInt(hosPrem, 0) +
  //   parseInt(riderPrem, 0) +
  //   parseInt(IpdPremRate, 0);

  // const totalAllPrem = parseInt(extraTotalPrem, 0) + parseInt(basicPrem, 0);

  const { data: branchList, isLoading, isError } = useGetBranchlistQuery();
  const { data: projectList, isLoadingg, isErrorr } = useGetProjectlistQuery();
  const { data: agentList } = useGetAgentlistQuery(projectId);
  const { data: modeList } = useGetModelistQuery(planName);
  console.log(modeList);
  const { data: bankList } = useGetBankListQuery();
  const { data: bankbranchList } = useGetBankbranchlistQuery(bankCode);
  const { data: districtList } = useGetDistrictlisttQuery();
  const { data: birthPlaceList } = useGetDistrictlisttQuery();
  const { data: genderList } = useGetGenderQuery();

  const { data: locallityList } = useGetLocallityQuery();
  const { data: countryList } = useGetCountrylistQuery();
  const { data: occupationList } = useGetOccupationlistQuery();
  const { data: educationList } = useGetEducationListQuery();

  const { data: religionList } = useGetReligionListQuery();
  const { data: planList } = useGetPlanlistQuery(calcuAge);
  const { data: premiumList } = useGetPremiumListQuery();

  const { data: TypeList } = useGetallTypeListQuery();
  const { data: thanaList } = useGetThanalistQuery(
    district ? district : pdistrict
  );
  const { data: postOfficeList } = useGetPostofficelistQuery(
    thana ? thana : pthana
  );

  const [selectedTopbarItem, setSelectedTopbarItem] = useState("PI");

  const handleTopbarItemClick = (item) => {
    setSelectedTopbarItem(item);
  };
  const topbarItems = [
    {
      code: "PI",
      title: "PROPOSAL INFO",
    },
    {
      code: "P",
      title: "PREMIUM INFO",
    },
    {
      code: "PRBM",
      title: "PRBM NOMINEE",
    },
    {
      code: "OTHERS",
      title: "OTHERS INFO",
    },
  ];
  // console.log(newProposalNo)
  // Enter proposal Entry
  const saveProposal = async () => {
    const pDate = formatAsMMDDYYYY(proposal_date);
    const riskDate = formatAsMMDDYYYY(commencementDate?.comm_date[0]);
    const marriageDate = formatAsMMDDYYYY(marriage_date);

    try {
      const response = await fetch("http://localhost:5001/api/proposal-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PROPOSAL_N: newProposalNo?.proposal_no[0] || "",
          PROPOSAL_D: pDate,
          RISKDATE: riskDate,
          PROPOSER: proposerName,
          POL_ENTRY_STATUS: policytype,
          FATHERS_NAME: fatherName,
          FATHERHUSB: fatherName,
          MOTHERS_NAME: motherName,
          ADDRESS1: address,
          POST_CODE_CUR: "12",
          POST_CODE_PER: "13",
          CITY: district,
          MOBILE: mobile,
          LOCALITY: resident || "",
          N_ID_NUMBER: nid,
          DOB: "1998-02-02", // Example date in YYYY-MM-DD format
          AGE: age,
          SEX: gender,
          OCCUPATION: occupation,
          AGENT_ID: agentValue,
          BRANCH_ID: branch || "",
          USERID: "650",
          LAST_EDUCATION: educationName,
          RELIGION: religion,
          MARITAL_STATUS: maritalStatus,
          MARRIAGE_DATE: marriageDate,
          LOCALITY_COUNTRY: country,
          SPOUSE: "",
          PD_CODE: projectId,
          LAST_EDU_DOCUMENT: isEduDocChecked ? 'Y' : 'N',
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data === "Proposal Entry Successfully") {
        const secondResponse = await fetch("http://localhost:5001/api/proposal-entry-address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            PROPOSAL_N: newProposalNo?.proposal_no[0] || "",
            DCODE: "25",
            TCODE: "30",
            POST_CODE: "35",
          }),
        });

        const secondData = await secondResponse.json();
        console.log(secondData);

        if (secondData.success) {
          setProposalFristPage('ok');
          swal({
            title: "Proposal Entry Successfully",
            icon: "success",
          });
        } else {
          console.error("Error in second post request:", secondData?.error);
        }
      } else {
        console.error("Error saving proposal:", data?.error);
      }
    } catch (error) {
      console.error("Error saving proposal:", error.message);
    }
  };


  // const saveProposal = async () => {
  //   const pDate = formatAsMMDDYYYY(proposal_date) ? formatAsMMDDYYYY(proposal_date) : "";
  //   try {
  //     const response = await fetch("http://localhost:5001/api/proposal-entry", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         PROPOSAL_N: newProposalNo?.proposal_no[0] ? newProposalNo?.proposal_no[0] : "",
  //         PROPOSAL_D: pDate,
  //         RISKDATE: formatAsMMDDYYYY(commencementDate?.comm_date[0]) ? formatAsMMDDYYYY(commencementDate?.comm_date[0]) : "",
  //         PROPOSER: proposerName,
  //         POL_ENTRY_STATUS: policytype,
  //         FATHERS_NAME: fatherName,
  //         FATHERHUSB: fatherName,
  //         MOTHERS_NAME: motherName,
  //         ADDRESS1: address,
  //         POST_CODE_CUR: "12",
  //         POST_CODE_PER: "13",
  //         CITY: district,
  //         MOBILE: mobile,
  //         LOCALITY: resident ? resident : "",
  //         N_ID_NUMBER: nid,
  //         DOB: "19980202",
  //         AGE: age,
  //         SEX: gender,
  //         OCCUPATION: occupation,
  //         AGENT_ID: agentValue,
  //         BRANCH_ID: branch ? branch : "",
  //         USERID: "650",
  //         LAST_EDUCATION: educationName,
  //         RELIGION: religion,
  //         MARITAL_STATUS: maritalStatus,
  //         MARRIAGE_DATE: formatAsMMDDYYYY(marriage_date),
  //         LOCALITY_COUNTRY: country,
  //         SPOUSE: "",
  //         PD_CODE: projectId,
  //         LAST_EDU_DOCUMENT: isEduDocChecked ? 'Y' : 'N',
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     if (data === "Proposal Entry Successfully") {
  //       setProposalFristPage('ok')
  //       swal({
  //         title: "Proposal Entry Successfully",
  //         icon: "success",
  //       });
  //     } else {
  //       console.error("Error saving proposal:", data?.error);
  //     }
  //   } catch (error) {
  //     console.error("Error saving proposal:", error.message);
  //   }
  // };
  // 2nd page update proposal
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      // displayName: name ? name : singleUser?.displayName,
      // email: userEmail ? userEmail : singleUser?.email,
      // userRole: role ? role : singleUser?.userRole,
      ADDRESS2: 'Kulaura,Sulhet',
      ADDRESS3: 'Chokoriya,Cox',
      ZIP: "35"
    };
    try {
      const response = await axios.put(
        `http://localhost:5001/api/proposal-update/B023000000002%2F24`,
        data,
      );
      console.log(response)
    } catch (err) {
      console.log('Error:', err);
    }
  };
  const lastEdu = isEduDocChecked ? 'Y' : 'N';
  console.log(planName, occupation, gender, sumAssured, eduId, 'Y', paymentMode)
  //Extra Premium 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/hospital-prem/${planName}/${occupation}/${gender}/${sumAssured}/${eduId}/${lastEdu}/${paymentMode}`
        );
        setHospitalRatePrem(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, occupation, gender, sumAssured, eduId, paymentMode, lastEdu]);

  // Hospital and Occapation rate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/occupRate/${occupation}`
        );
        setPremOccupRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [occupation]);


  // get Occupation prem rate
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5001/api/oe-rate/${planName}/${occupation}/${gender}/${sumAssured}/${eduId}/'Y'/${paymentMode}`
  //       );
  //       setOeRatePrem(response?.data);
  //     } catch (error) {
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, [planName, occupation, gender, sumAssured, eduStatus, pmode]);
  // get Occupation prem rate
  //handler for reset 
  const [sup, setSup] = useState()
  const [mdr, setMDR] = useState();
  const [waiverPrem, setWaiver] = useState();
  const [ipdRider, setIPDRider] = useState();
  const { data: SupplementaryList, refetch: refetchClassList } = useGetSupplimentClassListQuery({ occup_id: occupation, supp_code: supplimentId });
  const { data: SupplementList, refetch: refetchSupplementList } = useGetSupplimentListQuery();

  const [supplementList, setSupplementList] = useState([]);
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    setSupplementList(SupplementList);
  }, [SupplementList]);

  useEffect(() => {
    setClassList(SupplementaryList);
  }, [SupplementaryList]);

  const handleResetSupplyment = (e) => {
    const values = e.target.value
    setSup(values)
    setSupplementList([])
    setClassList([])
    setSuppPrem([])
    setSuppliRate([])
    setSuppliClass()
  };

  // get supplimentary rate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/suppli-rate/${occupation}/${supplimentId}/${supplimentClass}`
        );
        setSuppliRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [occupation, supplimentId, supplimentClass, paymentMode]);

  // get suppliment premium

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/suppliment-premium/${planName}/${occupation}/${supplimentId}/${supplimentClass}/${sumAssured}/${paymentMode}`
        );
        setSuppPrem(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, occupation, supplimentId, supplimentClass, sumAssured, pmode]);


  //get wwaiver Premium 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/waiver_premium/${calcuAge}/${[planName]}/${basicPrem || pmode}`
        );
        setWaiverPrem(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, basicPrem, calcuAge, pmode]);
  console.log(planName, selectTerm, dob, comm_datee, sumAssured, paymentMode)

  //get MDR Premium 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/mdr-prem/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${paymentMode}/PREM`
        );
        setMdrPremium(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, dob, comm_datee, sumAssured, paymentMode]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/mdr-prem/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${paymentMode}/RATE`
        );
        setMdrRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, dob, comm_datee, sumAssured, paymentMode]);

  // Major Diseage Reader 
  const handleMDRChange = (e) => {
    const values = e.target.value;
    setMDR(values)
  }
  // Waiver Premium 
  const handleWaiverPremChange = (e) => {
    const values = e.target.value;
    if (values === 'NO') {
      setWaiverPrem([])
      setPaymode(0)
    }
    setWaiver(values)
  }
  //IPD Rider 
  const handleIPDRiderChange = (e) => {
    const values = e.target.value;
    setIPDRider(values)
  }
  // Final Premium Calculation 

  const finalPremiumCalculation = (basicPrem || pmode) + sPrem
  return (
    <div>
      <Navbar />
      <h1
        style={{ fontFamily: "sans-serif" }}
        className=" shadow-lg font-bold text-dark w-full px-5 lg:w-72  mx-auto p-2 mt-5 rounded text-center"
      >
        PROPOSAL ENTRY FORM
      </h1>

      <div className="lg:mx-48 mt-3">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-success-200 dark:border-gray-700 dark:text-gray-400">
          {(topbarItems || [])?.map((item, index) => {
            return (
              <li
                key={index}
                className={`border-b-transparent mr-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center text-dark rounded-t-lg py-3 border rounded  ${selectedTopbarItem === item.code
                  ? "bg-[#087f23] text-[#fff]"
                  : ""
                  }`}
                onClick={() => handleTopbarItemClick(item.code)}
              >
                {" "}
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>

      {selectedTopbarItem === "PI" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2 ">
          <div class="p-4 flex grid grid-cols-1       mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-2">
            <div className="justify-center  flex gap-2">
              {
                USER_TYPE === "IN" ?
                  <>
                    <div className="flex items-center gap-2">
                      <Radio
                        // onChange={(e) => setPolicyType(e.target.value)}
                        onChange={handlePolicyTypeChange}
                        id="cp"
                        name="countries"
                        value="1"
                        defaultChecked
                      // Check the radio button if policyType is '1'
                      />
                      <Label htmlFor="cp">CURRENT POLICY</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <Radio
                        // onChange={(e) => setPolicyType(e.target.value)}
                        onChange={handlePolicyTypeChange}
                        id="tp"
                        name="countries"
                        value="10"
                      />
                      <Label htmlFor="tp">TP POLICY</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        onChange={(e) => setPolicyType(e.target.value)}
                        id="bp"
                        name="countries"
                        value="13"
                      />
                      <Label htmlFor="bp">SPECIAL/BACK DATE POLICY</Label>
                    </div>

                  </>
                  :
                  <div className="flex items-center gap-2">
                    <Radio
                      // onChange={(e) => setPolicyType(e.target.value)}
                      onChange={handlePolicyTypeChange}
                      id="cp"
                      name="countries"
                      value="1"
                      defaultChecked
                    // Check the radio button if policyType is '1'
                    />
                    <Label htmlFor="cp">CURRENT POLICY</Label>
                  </div>
              }
            </div>

            <div className="bg-white w-full   mt-3 lg:ml-12 lg:mt-0">
              <input
                type="text"
                id="success"
                className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                onChange={handleProposalNo}
                placeholder="Enter Proposal No"
              />
            </div>
            <div className="text-center flex w-full  mt-2 lg:mt-0">
              <button
                onClick={handleClearClick}
                type="button"
                class="focus:outline-none  text-xs lg:text-md ml-7 mt-1 lg:ml-20  w-32 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                CLEAR
              </button>
              <button
                type="button"
                class="w-801 lg:w-62 mr-12 ml-3 text-xs lg:text-md mt-1 lg:mr-0 lg:ml-5  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                UNDERWRITING PREVIEW
              </button>
            </div>
          </div>
          <hr />

          <div class="p-1 mb-0 flex grid grid-cols-1 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
            <div className="text-start px-2">
              <label className="text-start text-xs">SELECT OFFICE</label>
              <select
                onChange={handleBranch}
                className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
              >
                <option>SELECT</option>
                {branchList?.map((branchName, i) => (
                  <option key={i} value={branchName?.branch_id}>
                    {branchName?.branch_name} - {branchName?.branch_id}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-start px-2">
              <label className="text-start text-xs">SELECT PROJECT</label>
              <select
                onChange={(e) => setProjectId(e.target.value)}
                className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                value={projectId}
              >
                <option>SELECT</option>
                {projectList?.map((project, i) => (
                  <option key={i} value={project?.project_code}>
                    {project?.project_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-start px-2">
              <label className="text-start text-xs">SELECT AGENT</label>
              <select
                onChange={(e) => setAgentValue(e.target.value)}
                className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                value={agentValue}
              >
                <option>SELECT</option>
                {agentList?.map((agent, i) => (
                  <option key={i} value={agent?.agent_code}>
                    {agent?.agent_name}- {agent?.agent_code}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-start px-2">
              <label className="text-start text-xs">PROPOSAL DATE</label>
              {proposalInfo[0]?.proposal_date ? (
                <input
                  type="text"
                  id="success"
                  value={proposal_date}
                  className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                  onChange={handleproposalDateChange}
                />
              ) : (
                <input
                  type="date"
                  id="success"
                  // value={proposal_date}
                  value={formatAsMMDDYYYYy(policytype === '1' ? commencementDate?.comm_date[0] : proposal_date)}
                  className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                  onChange={handleproposalDateChange}
                />
              )}
            </div>
            <div className="text-start px-2">
              <label className="text-start text-xs">COMMENCEMENT DATE</label>
              {proposalInfo[0]?.risk_date ? (
                <input
                  type="text"
                  id="success"
                  className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                  value={proposal_date}
                  onChange={handleriskDateChange}
                />
              ) : (
                <input
                  type="date"
                  id="success"
                  className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                  // value={risk_date}
                  value={formatAsMMDDYYYYy(policytype === '1' ? commencementDate?.comm_date[0] : risk_date)}
                  onChange={handleriskDateChange}
                />
              )}
            </div>
          </div>

          <div className="shadow-lg m-2 border mt-5">
            <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
              <div className="text-start px-0">
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start px-2">
                    <label className="text-start text-xs">GENDER</label>

                    <select
                      onChange={(e) => setGender(e.target.value)}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      {gender === "1" && <option value="1">MALE</option>}
                      {gender === "2" && <option value="2">FEMALE</option>}
                      {gender === "3" && <option value="3">COMMON</option>}
                      {gender === "4" && <option value="4">OTHERS</option>}
                      {!gender && (
                        <>
                          <option>Select Gender</option>
                          {genderList?.map((g, i) => (
                            <option key={i} value={g?.gender_id}>
                              {g?.gender_name}
                            </option>
                          ))}
                        </>
                      )}
                    </select>
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">MARITAL STATUS</label>
                    {
                      proposalInfo[0]?.marital_status ? <input
                        type="text"
                        value={proposalInfo[0]?.marital_status === '2' || 'M' ? 'Married' : 'Single'}
                        className="form-input uppercase text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        readOnly
                      />
                        :
                        <select
                          onChange={handleMaritalStatus}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full "
                        >
                          {maritalStatus === "" && (
                            <option value="1">Select</option>
                          )}

                          <option value={1}>SINGLE</option>
                          <option value={2}>MARRIED</option>
                          <option value={3}>WIDOWED</option>
                          <option value={4}>DEVORCED</option>
                        </select>
                    }
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">MARRIAGE DATE</label>
                    {
                      proposalInfo[0]?.marrige_date ?
                        <input
                          type="text"
                          value={formatAsMMDDYYYYy(proposalInfo[0]?.marrige_date)}
                          className="form-input uppercase text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          onChange={handleMarrigeDate}
                        />
                        :
                        <input
                          type="date"
                          id="success"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          onChange={handleMarrigeDate}
                        />
                    }
                  </div>
                </div>

                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">PROPOSER</label>

                    {proposer ? (
                      <input
                        type="text"
                        id="success"
                        value={proposer ? proposer : ""}
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleGetProposer}
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleGetProposer}
                      />
                    )}
                  </div>
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">SPOUSE</label>

                    {proposalInfo[0]?.fatherhusb ? (
                      <input
                        type="text"
                        id="success"
                        value={
                          proposalInfo[0]?.fatherhusb
                            ? proposalInfo[0]?.fatherhusb
                            : ""
                        }
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleHusband}
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleHusband}
                      />
                    )}
                  </div>
                </div>
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">FATHER</label>
                    {proposalInfo[0]?.fathers_name ? (
                      <input
                        type="text"
                        id="success"
                        value={
                          proposalInfo[0]?.fathers_name
                            ? proposalInfo[0]?.fathers_name
                            : ""
                        }
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleFather}
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleFather}
                      />
                    )}
                  </div>
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">MOTHER</label>
                    {proposalInfo[0]?.mothers_name ? (
                      <input
                        type="text"
                        id="success"
                        value={
                          proposalInfo[0]?.mothers_name
                            ? proposalInfo[0]?.mothers_name
                            : ""
                        }
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleMotherName}
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleMotherName}
                      />
                    )}
                  </div>
                </div>

                {/* // join life will be postponded for the next page */}
                {/* <div className="text-start">
                  <div className="shadow-lg border m-2 rounded p-2">
                    <label className="text-sm p-2">JOINT LIFE POLICY</label>
                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="bg-white align-items-center m-1  lg:mt-0">
                        <input
                          type="text"
                          id="success"
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          placeholder="NAME"
                        />
                      </div>
                    </div>
                    <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                      <div className="bg-white align-items-center m-1  lg:mt-0">
                        <input
                          type="text"
                          id="success"
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          placeholder="DOB"
                        />
                      </div>

                      <div className="bg-white align-items-center m-1  lg:mt-0">
                        <input
                          type="text"
                          id="success"
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          placeholder="AGE"
                          onChange={setAge}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>

              <div className="m-3 shadow-lg">
                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-4 py-2">
                          CHAIN NAME
                        </th>
                        <th scope="col" class="px-4 py-2">
                          CHAIN CODE
                        </th>
                        <th scope="col" class="px-4 py-2">
                          CHAIN DESIGNATION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {chainlist?.map((chain, i) => (
                        <tr
                          key={i}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td class="px-4 py-2">{chain?.chain_name}</td>
                          <td class="px-4 py-2">{chain?.chain_code}</td>
                          <td class="px-4 py-2">{chain?.chain_designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg m-2 border">
            <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
              <div className="text-start px-0">
                <div className="text-start">
                  <div className="shadow-lg border m-2 rounded p-2">
                    <label className="text-sm font-bold text-center p-2">
                      PRESENT ADDRESS
                    </label>

                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="bg-white  align-items-center m-1  lg:mt-0">
                        <label className="align-items-center  text-xs">
                          FLAT/HOUSE/ROAD/VILLAGE
                        </label>
                        {proposalInfo[0]?.address1 ? (
                          <input
                            type="text"
                            id="success"
                            // value={
                            //   proposalInfo[0]?.address1
                            //     ? proposalInfo[0]?.address1
                            //     : ""
                            // }
                            value={address}
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleAddressChange}

                          />
                        ) : (
                          <input
                            type="text"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleAddressChange}
                          />
                        )}
                      </div>
                    </div>

                    <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          SELECT DISTRICT
                        </label>
                        <select
                          onChange={(e) => setDistrict(e.target.value)}
                          value={district}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {districtList?.map((district, i) => (
                            <option key={i} value={district?.div_code}>
                              {district?.division_name} - {district?.div_code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          SELECT THANA
                        </label>
                        <select
                          onChange={(e) => setThana(e.target.value)}
                          value={thana}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {thanaList?.map((thana, i) => (
                            <option key={i} value={thana?.thana_code}>
                              {thana?.thana_name} - {thana?.thana_code}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          POST OFFICE
                        </label>
                        <select
                          onChange={(e) => setPostoffice(e.target.value)}
                          value={postOffice}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {postOfficeList?.map((office, i) => (
                            <option key={i} value={office?.postoffice_code}>
                              {office?.postoffice_name} -{" "}
                              {office?.postoffice_code}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-start px-0">
                <div className="text-start">
                  <div className="shadow-lg border m-2 rounded p-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-bold text-center p-2">
                        PERMANENT ADDRESS
                      </label>
                      <div className="flex items-center gap-x-1">
                        <Checkbox
                          type="checkbox"
                          checked={isAddressChecked}
                          onChange={handleAddressCheckboxChange}
                        />
                        <Label className="text-sm font-bold">Do</Label>
                      </div>
                    </div>

                    <div class=" mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="bg-white  align-items-center m-1  lg:mt-0">
                        <label className="align-items-center  text-xs">
                          FLAT/HOUSE/ROAD/VILLAGE
                        </label>
                        <input
                          type="text"
                          id="success"
                          // value={proposalInfo[0]?.address1}
                          value={permanentAddress}
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>
                    </div>

                    <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          SELECT DISTRICT
                        </label>
                        <select
                          onChange={(e) => setPDistrict(e.target.value)}
                          value={pdistrict}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {districtList?.map((districtt, ii) => (
                            <option key={ii} value={districtt?.div_code}>
                              {districtt?.division_name} - {districtt?.div_code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          SELECT THANA
                        </label>
                        <select
                          onChange={(e) => setPThana(e.target.value)}
                          value={pthana}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {thanaList?.map((thanaa, ii) => (
                            <option key={ii} value={thanaa?.thana_code}>
                              {thanaa?.thana_name} - {thanaa?.thana_code}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          POST OFFICE
                        </label>
                        <select
                          onChange={(e) => setPPostoffice(e.target.value)}
                          value={ppostOffice}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {postOfficeList?.map((officee, ii) => (
                            <option key={ii} value={officee?.postoffice_code}>
                              {officee?.postoffice_name} -{" "}
                              {officee?.postoffice_code}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl m-2 ">
            <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
              <div className="text-start px-0">
                <div className="text-start">
                  <div className="shadow-lg border m-2 rounded p-2">
                    <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-start w-40 mt-3 font-bold text-xs">
                          ID TYPE
                        </label>
                        <select
                          // onChange={(e) => setPPostoffice(e.target.value)}
                          // value={ppostOffice}
                          className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full"
                        >
                          {TypeList?.map((type, ii) => (
                            <option key={ii} value={type?.type_id}>
                              {type?.type_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="w-36 font-bold mt-4 text-xs">
                          ID NUMBER{" "}
                        </label>
                        {proposalInfo[0]?.nid_number ? (
                          <input
                            type="text"
                            id="success"
                            value={
                              proposalInfo[0]?.nid_number
                                ? proposalInfo[0]?.nid_number
                                : ""
                            }
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleNid}
                          />
                        ) : (
                          <input
                            type="text"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleNid}
                          />
                        )}
                      </div>
                    </div>

                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="bg-white flex  align-items-center m-1  lg:mt-0">
                        <label className="w-32 font-bold  mt-4 text-xs">
                          E-TIN NUMBER{" "}
                        </label>
                        <input
                          type="text"
                          id="success"
                          value={proposalInfo[0]?.nid_number}
                          class="form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-start px-0">
                <div className="text-start">
                  <div className="text-start px-0">
                    <div className="shadow-lg border m-2 rounded p-2">
                      <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                        <div className="bg-white flex align-items-center m-1  lg:mt-0">
                          <label className="w-28 mt-4 font-bold text-xs">
                            MOB. NO.{" "}
                          </label>

                          {proposalInfo[0]?.mobile ? (
                            <input
                              type="number"
                              id="success"
                              maxLength={11}
                              minLength={11}
                              value={
                                proposalInfo[0]?.mobile
                                  ? proposalInfo[0]?.mobile
                                  : ""
                              }
                              class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                              onChange={handleMobile}
                            />
                          ) : (
                            <input
                              type="numnber"
                              id="success"
                              maxLength={11}
                              minLength={11}
                              class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                              onChange={handleMobile}
                            />
                          )}
                        </div>
                        <div className="bg-white flex  align-items-center m-1  lg:mt-0">
                          <label className="w-20  mt-4 font-bold text-xs">
                            TEL NO.{" "}
                          </label>
                          <input
                            type="text"
                            id="success"
                            value={proposalInfo[0]?.nid_number}
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          />
                        </div>
                      </div>
                      <div class=" mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                        <div className="bg-white flex align-items-center m-1  lg:mt-0">
                          <label className="w-24 mt-4 font-bold text-xs">
                            EMAIL{" "}
                          </label>
                          <input
                            type="text"
                            id="success"
                            value={proposalInfo[0]?.nid_number}
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl m-2 ">
            <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
              <div className="text-start px-0">
                <div className="text-start">
                  <div className="shadow-lg border m-2 rounded p-2">
                    <div class=" mb-0 flex grid grid-cols-1 rounded  mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-1">
                        <label className="w-32 mt-4 font-bold text-xs">
                          PLACE OF BIRTH
                        </label>
                        <select className="form-input shadow text-sm border-[#E3F2FD] mt-1 w-full">
                          {birthPlaceList?.map((district, i) => (
                            <option key={i} value={district?.div_code}>
                              {district?.division_name} - {district?.div_code}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-1 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-2">
                      <div className="bg-white col-span-2 flex align-items-center m-1  lg:mt-0">
                        <label className="w-36 mt-4 font-bold text-xs">
                          DATE OF BIRTH
                        </label>
                        {birth_dateE ? (
                          <input
                            type="text"
                            id="success"
                            value={birth_dateE}
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleBirthDateChange}
                          />
                        ) : (
                          <input
                            type="date"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            onChange={handleBirthDateChange}
                          />
                        )}
                      </div>
                      <div className="bg-white flex  justify-content-end m-1  lg:mt-0">
                        <label className="w-16  mt-4 font-bold text-xs">
                          AGE
                        </label>
                        <input
                          type="text"
                          id="success"
                          value={calcuAge}
                          onChange={handleAge}
                          disabled
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>
                    </div>

                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-1 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-2">
                      <div className="text-start flex px-1">
                        <label className="w-44 text-center  mt-3 font-bold text-xs">
                          RELIGION
                        </label>

                        <select
                          onChange={handleReligion}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        >
                          <>
                            {religionList?.map((list) => (
                              <option key={list?.religion_id} value={list?.religion_name}>
                                {list?.religion_name}
                              </option>
                            ))}
                          </>
                        </select>
                      </div>
                      <div className="text-start flex px-1">
                        <label className="w-24   mt-3 font-bold text-xs">
                          RESIDENT
                        </label>

                        <select
                          onChange={(e) => setResident(e.target.value)}
                          value={resident}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        >
                          <>
                            {locallityList?.map((locallity, i) => (
                              <option key={i} value={locallity?.locallity_id}>
                                {locallity?.locallity_name}
                              </option>
                            ))}
                          </>
                        </select>
                      </div>
                      <div className="text-start flex px-1">
                        <select
                          onChange={handleCountry}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        >
                          {resident === "3" && (
                            <>
                              {countryList?.map((country, i) => (
                                <option key={i} value={country?.country_name}>
                                  {country?.country_name}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-start px-0">
                <div className="text-start">
                  <div className="text-start px-0">
                    <div className="shadow-lg border m-2 rounded p-0">
                      <div class=" mb-0 flex justify-between rounded p-2 mt-1 lg:grid-cols-2 gap-0 w-full align-items-center   lg:mx-auto lg:mt-0">
                        <div className="text-start flex px-1">
                          <label className="w-32 text-center  mt-3 font-bold text-xs">
                            EDUCATION
                          </label>

                          <select
                            onChange={handleEducation}
                            className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          >
                            {educationList?.map((education, i) => (
                              <option key={i} value={`${education?.education_id}-${education?.education_name}`} onChange={handleEducationName}>
                                {education?.education_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <Checkbox
                            type="checkbox"
                            checked={isEduDocChecked}
                            onChange={handleEduDocChange}
                          />
                          <div>
                            <label className="text-center mt-3 font-bold text-xs">
                              EDUCATION DOCUMENT
                            </label>
                          </div>
                        </div>

                        {/* // POSTPONDED bY SIR */}
                        {/* <div className="text-start flex px-1">
                          <label className="w-32 text-center  mt-3 font-bold text-xs">
                            EDU STATUS
                          </label>

                          <select
                            onChange={handleEducationStatus}
                            className="form-input text-sm shadow border-[#E3F2FD] mt-3 w-full"
                          >
                            <option>SELECT EDU. STATUS</option>
                            <option value={"YES"}>YES</option>
                            <option value={"NO"}>NO</option>
                          </select>
                        </div> */}
                      </div>
                      <div className="m-2 rounded p-2">
                        <div className="text-start flex px-0">
                          <label className="w-32   mt-3 font-bold text-xs">
                            OCCUPATION
                          </label>

                          <select
                            onChange={handleOccupation}
                            className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          >
                            <option>Select Occupation</option>
                            {occupationList?.map((occupation, i) => (
                              <option key={i} value={occupation?.occupation_ID}>
                                {occupation?.occupation_ID}-{occupation?.occupation_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* LIEN permanently postponded */}
                      {/* <div class=" mb-0 flex grid grid-cols-1 rounded  p-2   mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                        <div class="flex border items-center shadow p-2 mb-2">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-checkbox"
                            class="ms-2 ml-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            LIEN
                          </label>
                        </div>

                        <div className="bg-white flex align-items-center m-1  lg:mt-0">
                          <label className="w-28 mt-4 font-bold text-xs">
                            LIEN%
                          </label>
                          <input
                            type="text"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          />
                        </div>
                        <div className="bg-white flex  align-items-center m-1  lg:mt-0">
                          <label className="w-20  mt-4 font-bold text-xs">
                            YEARS
                          </label>
                          <input
                            type="text"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={saveProposal}
              type="submit"
              class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}

      {selectedTopbarItem === "P" ? (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="text-start px-2">
              <div className="shadow border-2 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-2 rounded text-xs text-dark">
                  PREMIUM CALCULATION
                </h2>

                <div class="p-0 mb-0 flex grid grid-cols-1 rounded  mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  {proposalInfo[0]?.plan_desc ? (
                    <div className="text-start px-2">
                      <label className="text-start text-xs">Plan Name</label>
                      <input
                        type="text"
                        id="success"
                        value={proposalInfo[0]?.plan_desc}
                        disabled
                        class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePlan}


                      />
                    </div>
                  ) : (
                    <div className="text-start px-2">
                      <label className="text-start text-xs">PLAN LIST</label>
                      <select
                        onChange={handlePlan}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      >
                        <>
                          <option>Select Plan</option>
                          {planList?.map((plan, i) => (
                            <option
                              key={i}
                              value={`${plan?.plan_id}-${plan?.calcu_type}-${plan?.suplimentary}-${plan?.extra_loading}-${plan?.major_diseage}-${plan?.impatient_reader}-${plan?.prem_waiver}-${plan?.min_age}-${plan?.max_age}-${plan?.min_term}-${plan?.max_term}-${plan?.min_suminsured}-${plan?.max_suminsured}`}
                            >
                              {plan?.plan_id}-{plan?.plan_name}
                            </option>
                          ))}
                        </>
                      </select>
                    </div>
                  )}
                </div>
                {(planName === '08' || planName === '09') && (
                  <div className="shadow-lg border m-2 rounded p-2">
                    <div className="mb-0 flex grid grid-cols-2 rounded mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-1">
                      <div className="bg-white align-items-center m-1 lg:mt-0">
                        <label className="text-start text-xs">CHILD NAME</label>
                        <input
                          type="text"
                          id="success"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          placeholder="CHILD NAME"
                        />
                      </div>

                      <div className="bg-white align-items-center m-1 lg:mt-0">
                        <label className="text-start text-xs">CHILD AGE</label>
                        <input
                          type="date"
                          id="success"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          placeholder="CHILD AGE"
                          onChange={handleChildBirthChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {planName === '19' && (
                  <div className="text-start">
                    <div className="shadow-lg border m-2 rounded p-2">
                      <label className="text-sm p-2">JOINT LIFE POLICY</label>
                      <div className="mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                        <div className="bg-white align-items-center m-1 lg:mt-0">
                          <input
                            type="text"
                            id="success"
                            className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            placeholder="NAME"
                          />
                        </div>
                      </div>
                      <div className="mb-0 flex grid grid-cols-2 rounded mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-1">
                        <div className="bg-white align-items-center m-1 lg:mt-0">
                          <input
                            type="date"
                            id="success"
                            className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            placeholder="DOB"
                          />
                        </div>

                        <div className="bg-white align-items-center m-1 lg:mt-0">
                          <input
                            type="date"
                            id="success"
                            className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            placeholder="AGE"
                            onChange={setAge}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div class="p-1 mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="w-full lg:w-full bg-white align-items-center pr-2 m-1  lg:mt-0">
                    <label className="text-start text-xs">
                      POLICY HOLDER AGE
                    </label>
                    <input
                      type="text"
                      id="success"
                      value={calcuAge}
                      disabled
                      class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      onChange={handlePremAge}
                    />
                  </div>
                  <div className="col-span-2 bg-white align-items-center m-1  lg:mt-0">
                    {proposalInfo[0]?.term ? (
                      <div className="text-start px-2">
                        <label className="text-start text-xs">
                          {" "}
                          TERM OF POLICY
                        </label>
                        <input
                          type="text"
                          id="success"
                          value={proposalInfo[0]?.term}
                          disabled
                          class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          onChange={handlePlan}
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="text-start text-xs">
                          TERM OF POLICY
                        </label>
                        <select
                          onChange={handleterm}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        >
                          <>
                            <option>Select Term</option>
                            {termList?.map((termm, i) => (
                              <option key={i} value={termm?.term}>
                                {termm?.term}
                              </option>
                            ))}
                          </>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
                <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  {proposalInfo[0]?.instmode ? (
                    <div className="text-start px-2">
                      <label className="text-start text-xs">PAYMENT MODE</label>
                      <input
                        type="text"
                        id="success"
                        value={proposalInfo[0]?.instmode}
                        disabled
                        class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePaymentMode}
                      />
                    </div>
                  ) : (
                    <div className=" bg-white align-items-center m-1  lg:mt-0">
                      <label className="text-start text-xs">PAYMENT MODE</label>
                      <select
                        onChange={handlePaymentMode}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      >
                        <>
                          <option>Select Mode</option>
                          {modeList?.map((mode, i) => (
                            <option key={i} value={mode?.mode_code}>
                              {mode?.mode_code}-{mode?.mode_name}
                            </option>
                          ))}
                        </>
                      </select>
                    </div>
                  )}
                </div>
                {/* //total installment and age admitted postponded by Sir  */}

                {/* <div class="p-1 mb-8 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="col-span-2 bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">
                      TOTAL INSTALLMENT
                    </label>
                    {proposalInfo[0]?.totalinst ? (
                      <input
                        type="text"
                        id="success"
                        value={proposalInfo[0]?.totalinst}
                        disabled
                        class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        value={totalInstallment}
                        class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                      />
                    )}
                  </div>
                  <div className="w-full lg:w-full bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-start text-xs">AGE ADMITTED</label>
                    <select
                      // onChange={handlePaymode}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <>
                        <option>Select AGE ADMITTED</option>
                        <option value="Y">YES</option>
                        <option value="N">NO</option>
                      </>
                    </select>
                  </div>
                </div> */}
              </div>

              <div className="text-start mt-4 mb-2">
                <div class=" mb-0 grid grid-cols-4 rounded mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-xs text-start w-44 mt-3 p-0">
                      CALCULATION_TYPE
                    </label>
                    <input
                      onChange={handleSumAssured}
                      type="text"
                      id="success"
                      value={calcuType}
                      disabled
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                  <div className="bg-white align-items-center m-1  lg:mt-0">
                    <label className="text-xs text-start w-44 mt-3 p-0">
                      SUPPLEMENTARY
                    </label>
                    <input
                      onChange={handleSumAssured}
                      type="text"
                      id="success"
                      value={suplimentary}
                      disabled
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                  <div className="bg-white  align-items-center m-1 lg:mt-0">
                    <label className="text-xs text-start w-16 mt-3 p-0">
                      EXTRA_LOADING
                    </label>
                    <input
                      type="text"
                      id="success"
                      value={extra_loading}
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                  <div className="bg-white  align-items-center m-1 lg:mt-0">
                    <label className="text-xs text-center w-16 mt-3 p-0">
                      MAJOR_DIEASES_RIDER
                    </label>
                    <input
                      type="text"
                      id="success"
                      value={major_diseage}
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                  <div className="bg-white  align-items-center m-1 lg:mt-0">
                    <label className="text-xs text-center w-16 mt-3 p-0">
                      PREMIUM_WAIVER
                    </label>

                    <input
                      type="text"
                      id="success"
                      value={prem_waiver === 'Y' ? 'YES' : prem_waiver === 'N' ? 'NO' : ''}
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                  <div className="bg-white  align-items-center m-1 lg:mt-0">
                    <label className="text-xs text-center w-16 mt-3 p-0">
                      INPATIENT_RIDER
                    </label>

                    <input
                      type="text"
                      id="success"
                      value={impatient_reader}
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>

              </div>
              <div className="text-start mt-4 mb-2">
                <div className="shadow border-2  m-0 rounded p-1">
                  {calcuType === "P" && (
                    <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                      <div className="w-full lg:w-full bg-white align-items-center m-1  lg:mt-0">
                        <select
                          onChange={handlePaymode}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        >
                          <>
                            <option>Select Premium</option>

                            {premiumList?.map((prem, i) => (
                              <option key={i} value={prem?.premium}>
                                Premium Tk-{prem?.premium}
                              </option>
                            ))}
                          </>
                        </select>
                      </div>
                    </div>
                  )}

                  <div class=" mb-0 flex grid grid-cols-3 rounded     mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                    <div className="bg-white align-items-center m-1  lg:mt-0">
                      <label className="text-xs text-start w-44 mt-3 p-0">
                        SUM ASSURED
                      </label>
                      {proposalInfo[0]?.sum_insure ? (
                        <input
                          onChange={handleSumAssured}
                          type="text"
                          id="success"
                          value={proposalInfo[0]?.sum_insure}
                          // disabled
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      ) : (
                        <input
                          onChange={handleSumAssured}
                          type="text"
                          id="success"
                          // value={sumAssured}
                          value={sumassurance[0] || sumAssured}
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      )}
                    </div>

                    <div className="bg-white  align-items-center m-1  lg:mt-0">
                      <label className="text-xs text-start w-16 mt-3 p-0">
                        RATE
                      </label>
                      <input
                        type="text"
                        id="success"
                        value={pRate}
                        class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                      />
                    </div>
                    <div className="bg-white  align-items-center m-1  lg:mt-0">
                      <label className="text-xs text-center w-16 mt-3 p-0">
                        FACTOR
                      </label>

                      <input
                        type="text"
                        id="success"
                        value={pFactor}
                        class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                      />
                    </div>
                  </div>
                  <div class=" mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                    <div className="bg-white  align-items-center m-1  lg:mt-0">
                      <label className="text-xs text-start w-40 mt-3 p-0">
                        BASIC PREMIUM
                      </label>
                      {proposalInfo[0]?.premium ? (
                        <input
                          type="text"
                          id="success"
                          value={proposalInfo[0]?.premium}
                          disabled
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      ) : (
                        <input
                          type="text"
                          id="success"
                          value={basicPrem || pmode}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      )
                      }
                    </div>

                    <div className="bg-white  align-items-center m-1  lg:mt-0">
                      <label className="text-xs text-center w-36 mt-3 p-0">
                        SUM AT RISK
                      </label>
                      {proposalInfo[0]?.sumatrisk ? (
                        <input
                          type="text"
                          id="success"
                          value={proposalInfo[0]?.sumatrisk}
                          disabled
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      ) : (
                        <input
                          type="text"
                          id="success"
                          value={sumAtRisk}
                          class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-start px-2">
              {
                extra_loading === 'YES' &&
                < >
                  <div className="shadow-lg border m-1 rounded p-1">
                    <h2 className="text-xs font-bold ml-2">EXTRA PREMIUM</h2>

                    <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-start w-80 mt-3 p-0">
                          OE PREM & RATE
                        </label>
                        <input
                          type="text"
                          id="success"
                          disabled
                          // value={oeRate ? oeRate : "0"}
                          value={occupation !== '1' ? hosPremRate : 0}
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                        <input
                          type="text"
                          id="success"
                          disabled
                          value={occupation !== '1' ? premOccupRate?.occupationRate : 0}
                          class="form-input text-xs shadow border-[#E3F2FD] ml-1 mt-1 w-full"
                        />
                      </div>
                      {/* console.log(planName, occupation, gender, sumAssured, eduId, 'Y', paymentMode) */}
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-start w-3/4 mt-3 p-0">
                          H.PREM & RATE
                        </label>
                        <input
                          type="text"
                          id="success"
                          disabled
                          // value={hosRate ? hosRate : 0}
                          value={
                            (gender === '2' && occupation === '1') || [1, 2, 3].includes(eduId)
                              ? hosPremRate
                              : 0
                          }
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                        <input
                          type="text"
                          id="success"
                          disabled
                          // value={hosPrem ? hosPrem : 0}
                          value={
                            ((gender === '2' && occupation === '1') || [1, 2, 3].includes(eduId)) && hosPremRate !== 0
                              ? premOccupRate?.occupationRate
                              : 0
                          }
                          class="form-input text-xs shadow border-[#E3F2FD] ml-1 mt-1 w-full"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }

              <div class={`${suplimentary === 'NO' ? 'justify-center items-center' : 'p-1 mb-0 grid grid-cols-2 rounded mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-centerlg:mx-auto lg:mt-1'}`}>

                {
                  suplimentary === 'YES' &&
                  <>
                    <div className="text-start mb-4 m-1">
                      <div className="shadow border-2 m-0 rounded p-0">
                        <div className="mb-0 flex grid grid-cols-3 rounded mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center p-2 lg:mx-auto lg:mt-0">
                          <div className="bg-white m-1 lg:mt-0 flex items-center justify-items-center">
                            <label className="w-2/3 text-start text-sm">Do you want to Supp. Premium</label>
                            <select
                              className="form-input text-xs shadow border-[#E3F2FD] mt-0 w-1/3"
                              onChange={handleResetSupplyment}
                            >
                              <option value='NO'>NO</option>
                              <option value='YES'>YES</option>
                            </select>
                          </div>
                          {
                            sup === 'YES' &&
                            <>
                              <div className="flex bg-white align-items-center m-1 lg:mt-0">
                                <label className="w-16 text-start mt-3 text-xs">SUPPL.</label>
                                <select
                                  onChange={handleSupply}
                                  className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                                >
                                  <>
                                    <option>Select Suppli.</option>
                                    {SupplementList?.map((suppl, i) => (
                                      <option key={i} value={suppl?.supp_code}>
                                        {suppl?.supp_name}
                                      </option>
                                    ))}
                                  </>
                                </select>
                              </div>

                              <div className="flex bg-white align-items-center m-1 lg:mt-1">
                                <label className="w-16 text-start mt-3 text-xs">CLASS</label>
                                <select
                                  onChange={handleSuppliClass}
                                  className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                                >
                                  <>
                                    <option>Select Suppli. Class</option>
                                    {
                                      classList?.map((supp, i) => (
                                        <option key={i} value={supp?.class_id}>
                                          {supp?.class_name}
                                        </option>
                                      ))}
                                  </>
                                </select>
                              </div>

                              <div className="bg-white flex align-items-center m-1 lg:mt-0">
                                <label className="text-xs text-start w-16 mt-3 p-0">RATE</label>
                                <input
                                  type="text"
                                  id="success"
                                  value={suppliment_rate || 0}
                                  className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>

                              <div className="bg-white flex align-items-center m-1 lg:mt-0">
                                <label className="text-xs text-start w-16 mt-3 p-0">PREMIUM</label>
                                <input
                                  type="text"
                                  value={sPrem || 0}
                                  id="success"
                                  className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>
                            </>
                          }

                        </div>
                      </div>
                    </div></>
                }
                <div className="text-start mb-4 m-1">
                  {/* h-[215px] class e ay height ta chilo  */}

                  {
                    prem_waiver === 'Y' &&
                    <>
                      <div className="shadow  border-2 m-1 rounded p-0">
                        <div class=" mb-0 grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          {/* onChange={handleCheckboxxChange} */}
                          <div className="bg-white mt-1 lg:mt-0 flex items-center justify-items-center">
                            <label className={`text-start text-sm ${suplimentary === 'NO' ? 'w-3/4' : 'w-2/3'}`}>Do you want to Waiver Prem</label>
                            <select
                              className={`form-input text-xs shadow border-[#E3F2FD] mt-0 ${suplimentary === 'NO' ? 'w-1/4' : 'w-1/3'}`}
                              onChange={handleWaiverPremChange}
                            //  onChange={handleCheckboxChange}
                            >
                              <option value='NO'>NO</option>
                              <option value='YES'>YES</option>
                            </select>
                          </div>

                          {
                            waiverPrem === 'YES' &&
                            <>
                              <div className="bg-white flex align-items-center m-1  lg:mt-0">
                                <label className="text-xs text-start w-48 mt-3 p-0">
                                  WAIVER PREMIUM
                                </label>
                                <input
                                  type="text"
                                  id="success"
                                  disabled
                                  value={premiumWaiver || 0}
                                  class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>
                            </>
                          }
                        </div>
                      </div></>
                  }
                  {
                    major_diseage === 'YES' &&
                    <>
                      <div className="shadow  border-2  m-0 rounded p-0">
                        <div class=" mb-0 grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="bg-white m-1 lg:mt-0 flex items-center justify-items-center">
                            <label className={`text-start text-sm ${suplimentary === 'NO' ? 'w-3/4' : 'w-2/3'}`}>Do you want to MDR</label>
                            <select
                              className={`form-input text-xs shadow border-[#E3F2FD] mt-0 ${suplimentary === 'NO' ? 'w-3/4' : 'w-1/3'}`}
                              onChange={handleMDRChange}
                            //  onChange={handleCheckboxChange}
                            >
                              <option value='NO'>NO</option>
                              <option value='YES'>YES</option>
                            </select>
                          </div>
                          {
                            mdr === 'YES' &&
                            <>
                              <div className="bg-white flex align-items-center m-1  lg:mt-0">
                                <label className="text-xs text-start w-24 mt-3 p-0">
                                  RATE
                                </label>
                                <input
                                  type="text"
                                  id="success"
                                  disabled
                                  // value={riderRate ? riderRate : "0"}
                                  value={mdrRate[0]?.mdr_prem.toFixed(2) || 0}
                                  class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>

                              <div className="bg-white flex align-items-center m-1  lg:mt-0">
                                <label className="text-xs text-start w-24 mt-3 p-0">
                                  PREMIUM
                                </label>
                                <input
                                  type="text"
                                  id="success"
                                  disabled
                                  value={mdrPremium[0]?.mdr_prem || 0}
                                  class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>
                            </>
                          }
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>

              {
                impatient_reader === 'YES' &&
                <>
                  <div className="text-start mb-3">
                    <div className="shadow-lg border m-1 rounded p-1">
                      <h2 className="text-xs font-bold ml-2">IPD TREATMENT RIDER</h2>
                      <div className="bg-white m-1 w-1/2 lg:mt-0 flex justify-evenly items-center">
                        <label className="w-3/4 text-start text-sm">Do you want to IPD Rider</label>
                        <select
                          className="form-input text-xs shadow border-[#E3F2FD] mt-0 w-2/4"
                          onChange={handleIPDRiderChange}
                        >
                          <option value="NO">NO</option>
                          <option value="YES">YES</option>
                        </select>
                      </div>
                      {ipdRider === 'YES' && (
                        <>
                          <div className="mb-0 flex grid grid-cols-2 rounded mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center p-1 lg:mx-auto lg:mt-0">
                            <div className="bg-white flex align-items-center m-1 lg:mt-0">
                              <label className="w-24 text-start mt-3 text-xs">PLAN PREM</label>
                              <select
                                onChange={handleIpdplan}
                                className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                              >
                                <>
                                  <option>SELECT PLAN PREM</option>
                                  {premPlanlist?.map((planList, i) => (
                                    <option key={i} value={planList?.plan_no}>
                                      {planList?.plan_name}
                                    </option>
                                  ))}
                                </>
                              </select>
                            </div>

                            <div className="bg-white flex align-items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-48 mt-3 p-0">START FROM</label>

                              <input
                                type="text"
                                id="success"
                                value={risk_date}
                                className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="mb-0 flex grid grid-cols-3 rounded mt-0 lg:grid-cols-3 gap-0 w-full justify-center align-items-center p-1 lg:mx-auto lg:mt-0">
                            <div className="bg-white flex align-items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-32 mt-3 p-0">PREM RATE</label>

                              <input
                                type="text"
                                id="success"
                                value={IpdPremRate ? IpdPremRate : '0'}
                                className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                              />
                            </div>

                            <div className="bg-white flex align-items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-24 mt-3 p-0">BENEFITS</label>
                              <input
                                type="text"
                                id="success"
                                value={0}
                                className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                              />
                            </div>

                            <div className="bg-white flex align-items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-24 mt-3 p-0">END AT</label>

                              <input
                                type="text"
                                id="success"
                                value={endAtdateFormatted ? endAtdateFormatted : '-'}
                                className="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              }

              <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
                <div className="bg-white flex align-items-center m-1  lg:mt-0">
                  <label className="text-xs text-start w-36 mt-3 p-0">
                    EXT. PREM
                  </label>
                  <input
                    type="text"
                    id="success"
                    class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>

                <div className="bg-white flex align-items-center m-1  lg:mt-0">
                  <label className="text-xs font-bold text-start w-32 mt-3 p-0">
                    TOTAL EXTRA
                  </label>

                  <input
                    type="text"
                    id="success"
                    disabled
                    // value={extraTotalPrem ? extraTotalPrem : "0"}
                    class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>
              </div>
              <div className="text-start mb-4">
                <div className="shadow-lg border m-1 rounded p-1">
                  <h2 className="text-xs font-bold ml-2">
                    OPTION & POLICY STATUS
                  </h2>

                  <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
                    <div className=" flex gap-2">
                      <div className="flex items-center gap-2">
                        <Radio
                          id="uk"
                          name="countries"
                          value="1"
                        // Check the radio button if policyType is '1'
                        />
                        <Label htmlFor="uk">A</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Radio id="uk" name="countries" value="10" />
                        <Label htmlFor="uk">B</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="uk" name="countries" value="13" />
                        <Label htmlFor="uk">C</Label>
                      </div>
                    </div>
                    <div className=" flex gap-2">
                      <div className="flex items-center gap-2">
                        <Radio
                          id="ukS"
                          name="CS"
                          value="1"
                        // Check the radio button if policyType is '1'
                        />
                        <Label htmlFor="ukS">STANDARD</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Radio id="ukS" name="CS" value="10" />
                        <Label htmlFor="ukS">SUBSTANDARD</Label>
                      </div>
                    </div>
                    <div className="bg-white flex align-items-center m-1  lg:mt-0">
                      <label className="text-sm font-bold text-start ml-5 w-48 mt-3 p-0">
                        TOTAL PREM.
                      </label>
                      <input
                        type="text"
                        id="success"
                        // value={totalAllPrem ? totalAllPrem : "0"}
                        value={finalPremiumCalculation}
                        class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                      />
                    </div>
                  </div>

                  <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
                    <div className=" flex gap-2">
                      <div className="flex items-center gap-2">
                        <Radio
                          id="ukS"
                          name="CS"
                          value="1"
                        // Check the radio button if policyType is '1'
                        />
                        <Label htmlFor="ukS">MEDICAL</Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Radio id="ukS" name="CS" value="10" />
                        <Label htmlFor="ukS">NON MEDICAL</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleUpdate}
              type="submit"
              class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SUBMIT
            </button>
          </div>
        </div>)
        : selectedTopbarItem === "P" ? <div className="my-2 text-center text-lg text-red-600">Please fill up the proposal info form</div> : ''
      }
      {selectedTopbarItem === "PRBM" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="  text-start px-2 mb-3">
              <div class="h-[150px] p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                <div className="text-start bg-gray mb-4 m-1">
                  <div className="shadow border-2   m-0 rounded p-0">
                    <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-4 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-center w-48 mt-3 p-0">
                          DEPOSIT
                        </label>
                        <input
                          type="text"
                          id="success"
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>

                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-center w-48 mt-3 p-0">
                          SUSPENSE
                        </label>
                        <input
                          type="text"
                          id="success"
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-start w-48 mt-3 p-0">
                          NEXT PREM DATE
                        </label>
                        <input
                          type="text"
                          id="success"
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>

                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-start w-48 mt-3 p-0">
                          MATURITY DATE
                        </label>
                        <input
                          type="text"
                          id="success"
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                      </div>
                    </div>

                    <div class=" mb-3 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                      <div className="bg-white  justify-center flex align-items-center m-1  lg:mt-0">
                        <button
                          type="submit"
                          class="rounded text-end btn-sm focus:outline-none text-dark bg-green-100 hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-100 dark:focus:ring-green-800"
                        >
                          NOMINEE ENTRY
                        </button>
                        <button
                          type="submit"
                          class="rounded text-end btn-sm focus:outline-none text-dark bg-green-100 hover:bg-green-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 ml-2 mb-2 dark:bg-green-100 dark:hover:bg-green-100 dark:focus:ring-green-800"
                        >
                          PRBM ENTRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="overflow-x-auto px-4">
              <Table className="border bordered">
                <Table.Head>
                  <Table.HeadCell>RELATION</Table.HeadCell>
                  <Table.HeadCell>QTY</Table.HeadCell>
                  <Table.HeadCell>PRESENT HEALTH STATUS</Table.HeadCell>
                  <Table.HeadCell>AGE</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Father
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Mother
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Brother
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Sister
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      SPOUSE
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>

                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Son
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Daughter
                    </Table.Cell>
                    <div className="w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                    <Table.Cell>
                      <div className="flex">
                        <div className="flex items-center gap-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Good
                          </Label>
                        </div>
                        <div className="flex items-center gap-1  ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Sick
                          </Label>
                        </div>
                        <div className="flex items-center gap-1 ml-1">
                          <Checkbox id="promotion" />
                          <Label className="italic" htmlFor="promotion">
                            Late
                          </Label>
                        </div>
                      </div>
                    </Table.Cell>
                    <div className="pr-1 justify-right w-16">
                      <input
                        type="text"
                        id="success"
                        class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-2 w-full"
                      />
                    </div>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            <div className="overflow-x-auto px-4">
              <Table className="border bordered">
                <Table.Head>
                  <Table.HeadCell>AGE AT DEATH</Table.HeadCell>
                  <Table.HeadCell>CAUSE OF DEATH</Table.HeadCell>
                  <Table.HeadCell>DURATION OF DEASEAS</Table.HeadCell>
                  <Table.HeadCell>DEATH OF YEAR</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="py-1">
                      <div className="w-24 ">
                        <input
                          type="text"
                          id="success"
                          class=" form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell className="py-1">
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell className="py-1">
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell className="py-1">
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8 form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="pr-1 justify-right w-24">
                        <input
                          type="text"
                          id="success"
                          class="h-8  form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div class=" mb-0 flex rounded p-2 mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center   lg:mx-auto lg:mt-2">
            <div class="flex border items-center shadow p-2 mb-0">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 ml-2  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                FIRST PREGNANCY
              </label>
            </div>
            <div class="flex border items-center ml-2 shadow p-2 mb-0">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                MINORITY
              </label>
            </div>
          </div>
          <div class=" mb-0 flex grid grid-cols-2 rounded lg:px-80    mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
            <div className="bg-white flex align-items-center m-1  lg:mt-0">
              <label className="text-xs text-center w-48 mt-3 p-0">
                WITNESS NAME
              </label>
              <input
                type="text"
                id="success"
                class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
              />
            </div>

            <div className="bg-white flex align-items-center m-1  lg:mt-0">
              <label className="text-xs text-center w-48 mt-3 p-0">
                WITNESS MOBILE NO
              </label>
              <input
                type="text"
                id="success"
                class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
              />
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}

      {selectedTopbarItem === "OTHERS" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-4 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="col-span-2">
              <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
                <div className="text-start col-span-1  px-2">
                  <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                    <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                      HEALTH INFORMATION
                    </h2>

                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Fully Healthy
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Admit Hospital
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Surgery Record
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Diseases List
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Addiction Info
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Proposal Decline
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Current Madication
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Disability info
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Infections Diaseases
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                    <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2  text-sm  w-60">
                          Other Risk
                        </label>
                        <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                          <>
                            <option>Yes</option>
                            <option>No</option>
                          </>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" text-start px-2 mb-3">
                  <div class="  p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                    <div className="text-start bg-gray mb-4 m-1">
                      <div className="h-[500px]  shadow border-2   m-0 rounded p-0">
                        <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                          DIAGNOSTIC TEST
                        </h2>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              SD
                            </Label>{" "}
                          </div>

                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              CR
                            </Label>
                          </div>
                        </div>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              FMR
                            </Label>
                          </div>
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              SGPT
                            </Label>
                          </div>
                        </div>

                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              SGOT
                            </Label>
                          </div>

                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              PUR
                            </Label>{" "}
                          </div>
                        </div>

                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              ESR
                            </Label>{" "}
                          </div>

                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              PUR
                            </Label>{" "}
                          </div>
                        </div>

                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              CBC
                            </Label>
                          </div>

                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              PUR
                            </Label>{" "}
                          </div>
                        </div>

                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              BILIRUBIN
                            </Label>
                          </div>

                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              ECG
                            </Label>
                          </div>
                        </div>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              GAMMA GT
                            </Label>
                          </div>
                          <div className="flex items-center gap-1">
                            <Checkbox id="promotion" />
                            <Label className="italic pr-3" htmlFor="promotion">
                              ESR
                            </Label>{" "}
                          </div>
                        </div>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic w-60" htmlFor="promotion">
                              GTT
                            </Label>
                          </div>
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />
                            <Label className="italic w-60" htmlFor="promotion">
                              COLESTOROL
                            </Label>
                          </div>
                        </div>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              OTHER TEST
                            </Label>
                          </div>
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />
                            <Label className="italic w-60" htmlFor="promotion">
                              FBS
                            </Label>
                          </div>
                        </div>
                        <div class=" mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="flex items-center gap-1 ">
                            <Checkbox id="promotion" />{" "}
                            <Label className="italic" htmlFor="promotion">
                              URIC ACID
                            </Label>
                          </div>
                          <div className="flex items-center gap-1  ">
                            <Checkbox id="promotion" />
                            <Label className="italic" htmlFor="promotion">
                              X RAY
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" p-1 mb-0 flex col-span-2 grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                  <div className="text-start bg-gray mb-4 m-1">
                    <div className="shadow border-2   m-0 rounded p-0">
                      <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                        ONLY FOR WOMEN
                      </h2>
                      <div class=" mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                        <div className="text-start flex px-1">
                          <label className="text-center mt-2  text-sm  w-48">
                            Pregnant Info
                          </label>
                          <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                            <>
                              <option>Yes</option>
                              <option>No</option>
                            </>
                          </select>
                        </div>
                        <div className="text-start flex px-1 mt-2">
                          <label className="text-center mt-2  text-sm  w-48">
                            Delivery Process
                          </label>
                          <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                            <>
                              <option>Yes</option>
                              <option>No</option>
                            </>
                          </select>
                        </div>
                        <div className="text-start flex px-1 mt-2">
                          <label className="text-center mt-2  text-sm  w-48">
                            Female Diaseas
                          </label>
                          <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                            <>
                              <option>Yes</option>
                              <option>No</option>
                            </>
                          </select>
                        </div>

                        <div className="bg-white  flex align-items-center m-1  lg:mt-0">
                          <label className="w-48 mt-4 text-sm">
                            Exp Delivery Date
                          </label>
                          <input
                            type="date"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          />
                        </div>
                        <div className="bg-white  flex align-items-center m-1  lg:mt-0">
                          <label className="w-48 mt-4 text-sm">
                            Last Delivery Date
                          </label>
                          <input
                            type="date"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          />
                        </div>
                        <div className="bg-white  flex align-items-center m-1  lg:mt-0">
                          <label className="w-48 mt-4 text-sm">
                            Last Menstrual Date
                          </label>
                          <input
                            type="text"
                            id="success"
                            class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-start col-span-2  px-2 lg:mt-2">
              <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                  ARMED FORCE INFORMATION
                </h2>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <label className="text-xs text-center w-48 mt-3 p-0">
                      ARMED FORCE DESG
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Yes</option>
                        <option>No</option>
                      </>
                    </select>
                  </div>
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Health Category
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Yes</option>
                        <option>No</option>
                      </>
                    </select>
                  </div>
                </div>
              </div>

              <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                  PHYSICAL MEASUREMENTS
                </h2>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Hight type
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Foot</option>
                        <option>Meter</option>
                      </>
                    </select>
                  </div>
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                    />

                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 ml-2 w-full"
                    />
                  </div>
                </div>

                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Weight type
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Kilogram</option>
                        <option>Pund</option>
                      </>
                    </select>
                  </div>
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Chest Onbreat Type
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Inch</option>
                        <option>Centimeter</option>
                      </>
                    </select>
                  </div>
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Chest Breatless Type
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Inch</option>
                        <option>Centimeter</option>
                      </>
                    </select>
                  </div>
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Stomach Type
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      <>
                        <option>Inch</option>
                        <option>Centimeter</option>
                      </>
                    </select>
                  </div>
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                  BANK INFORMATION
                </h2>
                <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <label className="text-center mt-3  text-sm  w-32">
                      Account No
                    </label>
                    <input
                      type="text"
                      id="success"
                      class="form-input text-sm p-2 shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
                </div>
                <div class="p-1 mb-2 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-3  text-sm  w-20">
                      BANK
                    </label>
                    <select
                      onChange={handleBankCode}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      {bankList?.map((bank, i) => (
                        <option key={i} value={bank?.bank_code}>
                          {bank?.bank_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-start flex px-2">
                    <label className="text-center mt-3  text-sm  w-48">
                      BANK BRANCH
                    </label>
                    <select className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full">
                      {bankbranchList?.map((branch, i) => (
                        <option key={i} value={branch?.routing_no}>
                          {branch?.branch_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* previous policy entry */}
              <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                  PREVIOUS POLICY NO
                </h2>
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start col-span-2  flex px-2">
                    <label className=" text-center mt-3  text-sm  w-20">
                      Policy 1
                    </label>
                    <div className="bg-white w-full  mt-2  lg:mt-0">
                      <input
                        type="number"
                        id="success"
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePolicyNo}
                        placeholder="Enter Policy No"
                      />
                    </div>
                  </div>
                  <div className="bg-white col-span-3 flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      value={`${pol_proposer ? pol_proposer : "0"} ,${pol_suminsure ? pol_suminsure : "0"
                        } ,${formatAsMMDDYYYYy(
                          pol_riskdate ? pol_riskdate : "0"
                        )}`}
                      disabled
                      class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      onChange={handlePolicyNumber}
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={handleClearPolicydata}
                      type="submit"
                      class="focus:outline-none rounded  btn-sm  text-xs lg:text-md  mt-0   w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
                {/* 
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start col-span-2  flex px-2">
                    <label className=" text-center mt-3  text-sm  w-20">
                      Policy 2
                    </label>
                    <div className="bg-white w-full  mt-2  lg:mt-0">
                      <input
                        type="number"
                        id="success"
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePolicyNo}
                        placeholder="Enter Policy No"
                      />
                    </div>
                  </div>
                  <div className="bg-white col-span-3 flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input h-10 text-sm p-2 shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={handleClearPolicydata}
                      type="submit"
                      class="focus:outline-none rounded  btn-sm  text-xs lg:text-md  mt-0   w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start col-span-2  flex px-2">
                    <label className=" text-center mt-3  text-sm  w-20">
                      Policy 3
                    </label>
                    <div className="bg-white w-full  mt-2  lg:mt-0">
                      <input
                        type="number"
                        id="success"
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePolicyNo}
                        placeholder="Enter Policy No"
                      />
                    </div>
                  </div>
                  <div className="bg-white col-span-3 flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input h-10 text-sm p-2 shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={handleClearPolicydata}
                      type="submit"
                      class="focus:outline-none rounded  btn-sm  text-xs lg:text-md  mt-0   w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start col-span-2  flex px-2">
                    <label className=" text-center mt-3  text-sm  w-20">
                      Policy 4
                    </label>
                    <div className="bg-white w-full  mt-2  lg:mt-0">
                      <input
                        type="number"
                        id="success"
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePolicyNo}
                        placeholder="Enter Policy No"
                      />
                    </div>
                  </div>
                  <div className="bg-white col-span-3 flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input h-10 text-sm p-2 shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={handleClearPolicydata}
                      type="submit"
                      class="focus:outline-none rounded  btn-sm  text-xs lg:text-md  mt-0   w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-start col-span-2  flex px-2">
                    <label className=" text-center mt-3  text-sm  w-20">
                      Policy 5
                    </label>
                    <div className="bg-white w-full  mt-2  lg:mt-0">
                      <input
                        type="number"
                        id="success"
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        onChange={handlePolicyNo}
                        placeholder="Enter Policy No"
                      />
                    </div>
                  </div>
                  <div className="bg-white col-span-3 flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input h-10 text-sm p-2 shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={handleClearPolicydata}
                      type="submit"
                      class="focus:outline-none rounded  btn-sm  text-xs lg:text-md  mt-0   w-24 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      CLEAR
                    </button>
                  </div>
                </div> */}

                <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
                  <div className="text-end">
                    <label className="text-center font-bold  mt-3  text-sm  w-20">
                      Total:
                    </label>
                  </div>

                  <div className="bg-white flex align-items-center m-1  lg:mt-0">
                    <input
                      type="text"
                      id="success"
                      class="form-input h-10 text-sm p-2 shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2 mb-2">
            <button
              type="submit"
              className="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SAVE/EDIT
            </button>

            <button
              type="submit"
              class="focus:outline-none btn-sm lg:text-md mt-1 w-32 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm ml-2 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="
              focus:outline-none 
              btn-sm lg:text-md 
              mt-1 
              w-32 
              text-white 
              bg-red-700 
              hover:bg-red-800 
              focus:ring-4 
              focus:ring-red-300 
              font-medium 
              rounded-lg 
              text-sm 
              mx-2 
              py-2.5 
              mb-2 
              dark:bg-red-600 
              dark:hover:bg-red-700 
              dark:focus:ring-red-900
            "

            >
              EXIT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
