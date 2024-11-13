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
  useGetOptionsQuery,
  useGetPreviousSumassuranceQuery,
  useGetAllNomineeQuery,
  useGetNomineeBankbranchlistQuery,
} from "../../../features/api/proposal";
import axios from "axios";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const [projectId, setProjectId] = useState("");

  const [gender, setGender] = useState("");
  console.log(gender)
  const [maritalStatus, setMaritalStaus] = useState("");
  const [agentValue, setAgentValue] = useState("");
  const [proposalNo, setProposalNo] = useState("");
  const [chainlist, setChainList] = useState([]);
  const [proposalInfo, setProposalInfo] = useState([]);

  const [policyInfo, setPolicyInfo] = useState([]);

  const [proposal_date, setProposalDate] = useState(proposalInfo[0]?.proposal_date || '');
  console.log(proposalInfo[0]?.proposal_date)
  const [birth_date, setBirthDate] = useState(proposalInfo[0]?.risk_date || '');
  // const [birth_date, setBirthDate] = useState(proposalInfo[0]?.risk_date || '');
  const [resident, setResident] = useState();
  const [district, setDistrict] = useState();
  const [thana, setThana] = useState();
  const [postOffice, setPostoffice] = useState();
  const [pdistrict, setPDistrict] = useState();
  const [pthana, setPThana] = useState();
  const [ppostOffice, setPPostoffice] = useState();
  const [policytype, setPolicyType] = useState('1');
  const [risk_date, setRiskdate] = useState();
  const [proposerName, setProposer] = useState();
  const [fatherName, setFather] = useState();
  const [spouseName, setSpouse] = useState();
  const [motherName, setMother] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [nid, setNID] = useState();
  const [age, setAge] = useState();
  const [jAge, setJAge] = useState('');
  // const [planDetails, setPlanDetails] = useState([]);
  // console.log(planDetails)

  const [occupation, setOccupation] = useState();
  const [branch, setBranch] = useState();
  const [educationName, setEducation] = useState();
  const [eduId, setEduId] = useState();
  const [religion, setReligion] = useState();
  const [country, setCountry] = useState();
  const [newProposalNo, setNewProposalNo] = useState();

  const [commencementDate, setUpdateCommDate] = useState()
  const [planName, setPlan] = useState();
  console.log(planName)
  const [optionId, setOption] = useState('A');
  const [deathCoverage, setDeathCoverage] = useState('N');
  const [premage, setPremAge] = useState();
  const [termList, setTermList] = useState([]);
  const [calAge, setCalage] = useState();
  const [jcalAge, setJointAge] = useState();
  const [pmode, setPaymode] = useState(0);
  const [paymentMode, setPaymentMode] = useState('');
  console.log(paymentMode);
  const [t_installment, setInstallment] = useState();
  const [selectTerm, setTerm] = useState("");
  console.log(selectTerm)
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
  console.log(supplimentClass);
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
  const [hospitalPremRate, setHospitalRatePrem] = useState([""]);
  const [waiverPrem, setWaiver] = useState('NO');
  const [premWaiver, setWaiverPrem] = useState([]);
  const [mdrPremium, setMdrPremium] = useState([]);
  const [medicalStatus, setMedicalStatus] = useState();
  const [maturityDate, setMaturityDate] = useState();
  console.log(maturityDate)
  const [mdrRate, setMdrRate] = useState([]);
  // console.log(mdrPremium, mdrRate)
  const [ipdPlans, setIpdPlans] = useState([]);
  const [eduStatus, setEducationStatus] = useState();
  const [policyNo, setPolicyNo] = useState();
  const [marriage_date, setMarriageDate] = useState();
  const [eduName, setEducationName] = useState();
  const [getPolicyNumber, setGetPolicyNo] = useState();
  const [proposalFirstPage, setProposalFristPage] = useState('');

  const [ipdPlanNo, setIpdplanNo] = useState();
  const [ipdPlanName, setIpdPlanName] = useState();
  const [ipdEndDate, setIpdEndDate] = useState();
  const [ipdStartDate, setIpdStartDate] = useState();
  const [ipdBenefit, setIpdBenefit] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [riderPremRate, setRiderPremRate] = useState([]);

  const [iChecked, setIChecked] = useState(true);
  const [suppliRate, setSuppliRate] = useState([]);

  const [birth_dateE, setBirthDateE] = useState();
  const [oePrem, setOEPrem] = useState()

  const [oeRate, setOERate] = useState();
  const [hPrem, setHPrem] = useState();
  const [hRate, setHRate] = useState();
  const [previousPolicyNo, setPreviousPolicyNo] = useState();
  const [nomineeAge, setNomineeAge] = useState()
  const [nomineeList, setNomines] = useState([])
  console.log(nomineeList)
  // console.log(totalInstallment);
  const calcuAge = calAge?.age[0];
  const jointAge = jcalAge?.age[0];
  const sPrem = Math.ceil(suppPremium[0]?.premium);
  const basicPrem = basicPremium[0]?.basic_premium;
  const sumAtRisk = sumAtrisk[0]?.sum_at_risk;

  const hosPremRate = hospitalPremRate[0]?.hos_ratePrem;
  const pol_proposer = policyInfo[0]?.proposer;
  const pol_riskdate = policyInfo[0]?.risk_date;
  const pol_suminsure = policyInfo[0]?.sum_insure;

  const suppliment_rate = suppliRate[0]?.supp_rate;

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
    return `${day}/${month}/${year}`;
  };

  const formatAsMMDDYYYYSlash = (dateString) => {
    const dateObj = new Date(dateString);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(dateObj.getDate()).padStart(2, "0"); // Add leading zero if needed
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const formatAsMMDYbySlash = (yyyymmdd) => {
    const year = yyyymmdd.substring(0, 4);
    const month = yyyymmdd.substring(4, 6);
    const day = yyyymmdd.substring(6, 8);
    return `${month}/${day}/${year}`;  // Convert to MM/DD/YYYY
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
  const dob = formatAsMMDDYYYY(birth_date);
  const jDob = formatAsMMDDYYYY(jAge);



  const handleClearClick = () => {
    window.location.reload(); // Remove this line if present
  };
  // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleClearPolicydata = () => {
    setPolicyInfo("");
  };

  const handleIpdplan = (e) => {
    const values = e.target.value;
    const [plan_no, yly_max_benefit] = values.split("-");
    setIpdplanNo(plan_no);
    setIpdBenefit(yly_max_benefit);
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

  const handlePaymode = (e) => {
    setPaymode(e.target.value);
  };
  const handlePaymentMode = (e) => {
    setPaymentMode(e.target.value);
  };


  const handlePremAge = (e) => {
    setPremAge(e.target.value);
  };
  const [planId, setPlanId] = useState("");
  const { data: planList } = useGetPlanlistQuery(calcuAge || proposalInfo[0]?.age);
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

    setPlanId(value);  // Set the full value to planId
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
    setSupplementList([]);
    setClassList([]);
    setSuppPrem([]);
    setSuppliRate([]);
    setSuppliClass();
  };

  // Set planId based on proposalInfo
  useEffect(() => {
    if (proposalInfo[0]?.table_id) {
      const foundPlan = planList?.find(plan => plan.plan_id === proposalInfo[0]?.table_id);
      if (foundPlan) {
        setPlanId(`${foundPlan.plan_id}-${foundPlan.calcu_type}-${foundPlan.suplimentary}-${foundPlan.extra_loading}-${foundPlan.major_diseage}-${foundPlan.impatient_reader}-${foundPlan.prem_waiver}-${foundPlan.min_age}-${foundPlan.max_age}-${foundPlan.min_term}-${foundPlan.max_term}-${foundPlan.min_suminsured}-${foundPlan.max_suminsured}`);
        setPlan(foundPlan?.plan_id);
        setCalcuType(foundPlan.calcu_type);
        setSuplimentary(foundPlan.suplimentary);
        setPremWaiver(foundPlan.prem_waiver);
        setImpatientReader(foundPlan.impatient_reader);
        setExtraLoading(foundPlan.extra_loading);
        setMajordiseage(foundPlan.major_diseage);
      }
    }
  }, [proposalInfo, planList]);

  useEffect(() => {
    if (proposalInfo[0]?.sPrem > 0) {
      setSuplimentary('YES')
    }
    if (proposalInfo[0]?.premiumWaiver > 0) {
      setPremWaiver('Y')
    }
    if (proposalInfo[0]?.premiumWaiver > 0) {
      setPremWaiver('Y')
    }
    if (proposalInfo[0]?.oePrem > 0 || proposalInfo[0]?.hPrem > 0) {
      setExtraLoading('YES')
    }
    if (proposalInfo[0]?.mdrPrem > 0) {
      setMajordiseage('YES')
    }
    if (proposalInfo[0]?.ipdPrem > 0) {
      setImpatientReader('YES')
    }
  }, [proposalInfo[0]?.sPrem, proposalInfo[0]?.premiumWaiver, proposalInfo[0]?.hPrem, proposalInfo[0]?.oePrem, proposalInfo[0]?.mdrPrem, proposalInfo[0]?.ipdPrem])
  console.log(proposalInfo[0]?.mdrPrem, proposalInfo[0]?.ipdPrem)
  const handleOption = (e) => {
    setOption(e.target.value)
  };
  const handleDeathCoverae = (e) => {
    const values = e.target.value;
    if (values === 'YES') {
      setDeathCoverage('Y')
    } else if (values === 'NO') {
      setDeathCoverage('N')
    }
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  console.log(maritalStatus)
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
    // setSupplementList([])
    // setClassList([])
    // setSuppPrem([])
    // setSuppliRate([])
    // setSuppliClass()
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

  const handleSpouse = (e) => {
    const updatedValue = e.target.value.toUpperCase();
    setSpouse(updatedValue);
  };

  useEffect(() => {
    if (proposalInfo[0]?.fatherhusb) {
      setSpouse(proposalInfo[0]?.fatherhusb);
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
    console.log(e.target.value)
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
  console.log(proposalInfo[0]?.plan_desc)

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


  useEffect(() => {
    if (proposalInfo[0]?.occupation) {
      setOccupation(proposalInfo[0]?.occupation);
    }
  }, [proposalInfo]);
  useEffect(() => {
    if (proposalInfo[0]?.religion) {
      setReligion(proposalInfo[0]?.religion);
    }
  }, [proposalInfo]);

  useEffect(() => {
    if (proposalInfo[0]?.edu) {
      setEduId(proposalInfo[0]?.edu);
    }
  }, [proposalInfo]);
  useEffect(() => {
    if (proposalInfo[0]?.term) {
      setTerm(proposalInfo[0]?.term);
    }
  }, [proposalInfo[0]?.term]);
  console.log(proposalInfo[0]?.instmode)
  useEffect(() => {
    if (proposalInfo[0]?.instmode) {
      setPaymentMode(proposalInfo[0]?.instmode);
    }
  }, [proposalInfo[0]?.instmode]);

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
          `http://115.127.36.173:5001/api/policy-info?policy_no=${policyNo}`
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
          `http://115.127.36.173:5001/api/proposal-info?proposal_no=${proposalNo}`
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
          `http://115.127.36.173:5001/api/endAtDate/${comm_datee}`
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
      const url = `http://115.127.36.173:5001/api/total-installment/${pmode}/${selectTerm}`;
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
          `http://115.127.36.173:5001/api/prem-plan-list/${sumAssured}
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
          `http://115.127.36.173:5001/api/chain-list/${projectId}/${agentValue}`
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

  console.log(dob)
  console.log(birth_dateE)
  console.log(comm_datee)
  // get age
  useEffect(() => {
    const fetchData = async () => {
      const abc = `http://115.127.36.173:5001/api/get-age/${comm_datee}/${birth_dateE ? birth_dateE : dob
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
  // get joint policy age
  useEffect(() => {
    const fetchData = async () => {
      const abc = `http://115.127.36.173:5001/api/get-age/${comm_datee}/${birth_dateE ? birth_dateE : jDob
        }`;
      try {
        const response = await axios.get(abc);
        setJointAge(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [comm_datee, birth_dateE, jDob]);

  const [childDob, setChildDob] = useState(() => new Date().toISOString().split('T')[0]);
  const handleChildBirthChange = (e) => {
    setChildDob(e.target.value);
  };
  const [childAge, setChildAge] = useState();
  const childFinalAge = childAge?.age[0]
  const cDob = formatAsMMDDYYYY(childDob)
  console.log(comm_datee)
  // get child age
  useEffect(() => {
    const fetchChildAge = async () => {
      const childAgeUrl = `http://115.127.36.173:5001/api/get-age/${comm_datee}/${cDob}`;
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
          `http://115.127.36.173:5001/api/rate-calculation/${calcuAge}/${selectTerm}/${planName}/${childFinalAge}`
        );
        setRate(response?.data?.rate);
      } catch (error) {
        console.error("Error fetching rate calculation:", error);
      }
    };

    fetchData();
  }, [calcuAge, selectTerm, planName, childFinalAge]);


  // get term-list
  console.log(proposalInfo[0]?.age)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/term-list/${planName || proposalInfo[0]?.table_id}/${calcuAge || proposalInfo[0]?.age}`
        );
        setTermList(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, calcuAge, proposalInfo[0]?.age, proposalInfo[0]?.table_id]);
  // get chainlist

  // get new proposal Number
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/proposal-number?OFFICE_CODE=${branch}`
        );
        setNewProposalNo(response?.data);
      } catch (error) {
        console.error("Error fetching proposal number:", error);
      }
    };

    fetchData();
  }, [branch]);
  //get new proposal Number

  // get commencement date

  const commenceDate = formatAsMMDDYYYYy(commencementDate?.comm_date[0])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/comm_date/${currentDate}/${policytype}`
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
          `http://115.127.36.173:5001/api/suppliment-premium/${planName}/${occupation}/${supplimentId}/${supplimentClass}/${sumAssured}/${paymentMode}`
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/sumAssurance/${planName}/${selectTerm}/${calcuAge}/${+pmode}/${0}`
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
          `http://115.127.36.173:5001/api/basic-premium/${planName}/${selectTerm}/${calcuAge}/${paymentMode}/${sumAssured}/${optionId}/${0}/${deathCoverage}`
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
          `http://115.127.36.173:5001/api/sumat-risk/${planName}/${sumassurance[0] || sumAssured}/${basicPrem || pmode}/${pFactor}/${paymentMode}
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

  // get idp premium
  // SELECT POLICY_MANAGEMENT.IPD_PREM_CALC_NEW(: PLAN_NO,: TXT_DOB,: RISKADATE,: TXT_INSTMODE,: TXT_TABLE) XX FROM SYS.DUAL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/ipd-prem-rate/${ipdPlanNo}/${dob}/${comm_datee}/${paymentMode}/${planName}`
        );
        setIpdPlanRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [ipdPlanNo, dob, comm_datee, paymentMode, planName, sumAssured]);
  // get idp premium rate

  // get rider premium rate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/rider-prem-rate/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${pmode}`
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
          `http://115.127.36.173:5001/api/suppli-rate/${occupation}/${supplimentId}/${supplimentClass}`
        );
        setSuppliRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [occupation, supplimentId, supplimentClass, paymentMode]);
  // get supplimentary rate


  useEffect(() => {
    setOEPrem(occupation !== '1' ? hosPremRate : 0);
    setOERate(occupation !== '1' ? premOccupRate?.occupationRate : 0);

    const isEligibleForHPrem = (gender === '2' && occupation === '1') || [1, 2, 3].includes(eduId);

    setHPrem(isEligibleForHPrem ? hosPremRate : 0);
    setHRate(isEligibleForHPrem && hosPremRate !== 0 ? premOccupRate?.occupationRate : 0);
  }, [occupation, hosPremRate, premOccupRate, gender, eduId]);

  const { data: branchList } = useGetBranchlistQuery();
  const { data: projectList } = useGetProjectlistQuery();
  const { data: agentList } = useGetAgentlistQuery(projectId);
  const { data: modeList } = useGetModelistQuery(planName);
  console.log(modeList);
  console.log(planName);
  const { data: bankList } = useGetBankListQuery();
  const { data: bankbranchList } = useGetBankbranchlistQuery(bankCode);
  const { data: districtList } = useGetDistrictlisttQuery();
  console.log(district)
  const { data: birthPlaceList } = useGetDistrictlisttQuery();
  const { data: genderList } = useGetGenderQuery();

  const { data: locallityList } = useGetLocallityQuery();
  const { data: countryList } = useGetCountrylistQuery();
  const { data: occupationList } = useGetOccupationlistQuery();
  console.log(occupationList)
  const { data: educationList } = useGetEducationListQuery();
  console.log(educationList)
  const { data: religionList } = useGetReligionListQuery();
  // const { data: planList } = useGetPlanlistQuery(calcuAge || proposalInfo[0]?.age);
  const { data: options } = useGetOptionsQuery(planName);
  const { data: premiumList } = useGetPremiumListQuery();
  const { data: previousSumAssurance, error, isLoading } = useGetPreviousSumassuranceQuery(previousPolicyNo);

  const fetchNomines = async () => {
    try {
      const encodedManualProposalNo = encodeURIComponent(proposalNo || '');
      const encodedProposalNo = encodeURIComponent(newProposalNo?.proposal_no[0] || '');
      const finalProposalNo = encodedProposalNo || encodedManualProposalNo;
      const url = `http://115.127.36.173:5001/api/nominee/${finalProposalNo}`;

      console.log("Final URL:", url);  // Check if the URL is correct here

      const response = await axios.get(url);
      console.log("API Response:", response);

      if (response && response?.data) {
        setNomines(response?.data);
      } else {
        console.error("No data in the response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchNomines();
  }, [proposalNo, newProposalNo?.proposal_no[0]]);



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
      code: "FAMILY",
      title: "FAMILY HISTORY",
    },
    {
      code: "MEDICAL",
      title: "MEDICAL INFO",
    },
    {
      code: "N",
      title: "NOMINEE",
    },
  ];

  // Enter proposal Entry
  console.log(newProposalNo?.proposal_no[0])
  console.log(proposalNo)
  const sanitize = (value, defaultValue = "") => {
    if (value === undefined || value === null || Number.isNaN(value)) {
      return defaultValue;
    }
    return value;
  };
  const sanitizeDate = (date) => {
    return date && !isNaN(Date.parse(date)) ? formatAsMMDDYYYY(date) : "";
  };
  const saveProposal = async () => {
    const pDate = sanitizeDate(proposal_date);
    const riskDate = sanitizeDate(commencementDate?.comm_date[0]);
    const marriageDate = maritalStatus === "Married" ? sanitizeDate(marriage_date) : ""; // Set to empty if single

    try {
      const response = await fetch("http://115.127.36.173:5001/api/proposal-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PROPOSAL_N: sanitize(newProposalNo?.proposal_no[0]),
          PROPOSAL_D: pDate,
          RISKDATE: riskDate,
          PROPOSER: sanitize(proposerName),
          POL_ENTRY_STATUS: sanitize(policytype),
          FATHERS_NAME: sanitize(fatherName),
          FATHERHUSB: sanitize(fatherName),
          MOTHERS_NAME: sanitize(motherName),
          ADDRESS1: sanitize(address),
          POST_CODE_CUR: sanitize("12"),
          POST_CODE_PER: sanitize("13"),
          CITY: sanitize(district),
          MOBILE: sanitize(mobile),
          LOCALITY: sanitize(resident),
          N_ID_NUMBER: sanitize(nid),
          DOB: sanitize(dob),
          AGE: sanitize(calcuAge),
          SEX: sanitize(gender),
          OCCUPATION: sanitize(occupation),
          AGENT_ID: sanitize(agentValue),
          BRANCH_ID: sanitize(branch),
          USERID: sanitize("650"),
          LAST_EDUCATION: sanitize(educationName),
          RELIGION: sanitize(religion),
          MARITAL_STATUS: sanitize(maritalStatus),
          MARRIAGE_DATE: marriageDate,  // Use sanitized date if married
          LOCALITY_COUNTRY: sanitize(country),
          SPOUSE: sanitize(spouseName),
          PD_CODE: sanitize(projectId),
          LAST_EDU_DOCUMENT: isEduDocChecked ? 'Y' : 'N',
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.message === "Proposal Entry Successfully") {
        const secondResponse = await fetch("http://115.127.36.173:5001/api/proposal-entry-address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            PROPOSAL_N: sanitize(newProposalNo?.proposal_no[0]),
            DCODE: sanitize("25"),
            TCODE: sanitize("30"),
            POST_CODE: sanitize("35"),
          }),
        });

        const secondData = await secondResponse.json();
        console.log(secondData);

        if (secondData.success) {
          setProposalFristPage('ok');
          swal({
            title: "Proposal Entry Successfully",
            text: `Your proposal number: ${data.proposalNumber}`,
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
        `http://115.127.36.173:5001/api/proposal-update/B023000000002%2F24`,
        data,
      );
      console.log(response)
    } catch (err) {
      console.log('Error:', err);
    }
  };
  const lastEdu = isEduDocChecked ? 'Y' : 'N';

  //Medical Status Check
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Encode the proposal number to handle special characters like '/'
        const encodedProposalNo = encodeURIComponent(proposalNo);
        console.log(encodedProposalNo);

        const response = await axios.get(
          `http://115.127.36.173:5001/api/medical-status/${encodedProposalNo}`
        );

        // If the request is successful, update the state with the fetched data
        setMedicalStatus(response?.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // If a 404 error occurs, set the state to the "No medical status found" message
          setMedicalStatus("NO");
        } else {
          // Handle other errors here if necessary
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [proposalNo]);

  // get Maturity date
  console.log(comm_datee, selectTerm)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/maturity-date/${comm_datee}/${selectTerm}`
        );
        // Format the date
        const formattedDate = new Date(response?.data?.maturity_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        setMaturityDate(formattedDate);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [comm_datee, selectTerm]);

  // console.log(planName, occupation, gender, sumAssured, eduId, lastEdu, paymentMode)
  //Extra Premium 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/hospital-prem/${planName}/${occupation}/${gender}/${sumAssured}/${eduId}/${lastEdu}/${paymentMode}`
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
          `http://115.127.36.173:5001/api/occupRate/${occupation}`
        );
        setPremOccupRate(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [occupation]);

  //handler for reset 
  const [sup, setSup] = useState()
  const [mdr, setMDR] = useState('NO');
  const [ipdRider, setIPDRider] = useState('NO');
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
          `http://115.127.36.173:5001/api/suppli-rate/${occupation}/${supplimentId}/${supplimentClass}`
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
          `http://115.127.36.173:5001/api/suppliment-premium/${planName}/${occupation}/${supplimentId}/${supplimentClass}/${sumAssured}/${paymentMode}`
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
          `http://115.127.36.173:5001/api/waiver_premium/${calcuAge}/${[planName]}/${basicPrem || pmode}`
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
          `http://115.127.36.173:5001/api/mdr-prem/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${paymentMode}/PREM`
        );
        setMdrPremium(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [planName, selectTerm, dob, comm_datee, sumAssured, paymentMode]);

  //get MDR Rate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/mdr-prem/${planName}/${selectTerm}/${dob}/${comm_datee}/${sumAssured}/${paymentMode}/RATE`
        );
        setMdrRate(response?.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, [planName, selectTerm, dob, comm_datee, sumAssured, paymentMode]);
  // /get plan name for Ipd Rider
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://115.127.36.173:5001/api/ipd-plan/${comm_datee}/${sumAssured}`
        );
        setIpdPlans(response?.data);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [comm_datee, sumAssured]);

  // Major Diseage Reader 
  const handleMDRChange = (e) => {
    const values = e.target.value;
    setMDR(values)
  }
  const [mdrPrem, setMDRPr] = useState(0)
  const [mdrRatee, setMDRRatee] = useState(0)
  useEffect(() => {
    if (mdr === 'NO') {
      setMDRPr(0);
      setMDRRatee(0);
    } else {
      setMDRPr(mdrPremium[0]?.mdr_prem);
      setMDRRatee(mdrRate[0]?.mdr_prem.toFixed(2));
    }
  }, [mdr])

  //ata holo when plan change korbe tokon jate major diseage er amount na dore thake tai otao NO kore deya.
  useEffect(() => {
    if (major_diseage === 'NO') {
      setMDR('NO');
    }
  }, [major_diseage, planName]);
  //End Ipd Rider 

  // Waiver Premium 
  const [premiumWaiver, setPremW] = useState(0)
  const handleWaiverPremChange = (e) => {
    const values = e.target.value;
    setWaiver(values)
  }
  useEffect(() => {
    if (waiverPrem === 'NO') {
      setPremW(0);
    } else {
      setPremW(premWaiver[0]?.waiver_prem);
    }
  }, [waiverPrem])

  // ata holo when plan change korbe tokon jate waiver premium er amount na dore thake tai otao NO kore deya.
  useEffect(() => {
    if (prem_waiver === 'N') {
      setWaiver('NO');
    }
  }, [prem_waiver, planName]);

  //IPD Rider 

  const handleIPDRiderChange = (e) => {
    setIPDRider(e.target.value)
  }


  const [ipdPrem, setIpdPrem] = useState(0)
  // const [mdrRatee, setMDRRatee] = useState(0)
  useEffect(() => {
    if (ipdRider === 'NO') {
      setIpdPrem(0);
      setIpdBenefit(0);
      setIpdplanNo();
    } else if (ipdPremRate.length > 0 && ipdPlans.length > 0) {
      setIpdPrem(ipdPremRate[0]?.ipd_prem_rate);

      const selectedPlan = ipdPlans.find(plan => plan.plan_no === ipdPlanNo) || ipdPlans[0];
      const { start_from, end_to, plan_no } = selectedPlan;

      setIpdPlanName(plan_no);
      setIpdEndDate(end_to);
      setIpdStartDate(start_from);
      // setMDRRatee(mdrRate[0]?.mdr_prem.toFixed(2));
    }
  }, [ipdRider, ipdPlanNo, ipdPremRate, ipdPlans]);

  useEffect(() => {
    if (impatient_reader === 'NO') {
      setIPDRider('NO');
    }
  }, [impatient_reader, planName]);
  //End Ipd Rider 

  // console.log((hosPremRate || 0), (sPrem || 0), (premiumWaiver || 0), (mdrPrem || 0), (ipdPrem || 0))
  const extraTotal = (hosPremRate || 0) + (sPrem || 0) + (mdrPrem || 0) + (premiumWaiver || 0) + (ipdPrem || 0)

  // const totalAllPrem = parseInt(extraTotalPrem, 0) + parseInt(basicPrem, 0);
  // Final Premium Calculation 

  const finalPremiumCalculation = (basicPrem || pmode) + extraTotal;


  const handleUpdatePremInfo = async () => {
    try {
      const encodedProposalNo = encodeURIComponent(newProposalNo?.proposal_no[0]);

      // Insert data
      const insertData = {
        REFNO: newProposalNo?.proposal_no[0],
        PLAN_NO: planName,
        AGE: calcuAge,
        PREM_RATE: ipdPrem,
        DOB: formatAsMMDYbySlash(dob),
        CURRENT_AGE: 30,
        START_FROM: formatAsMMDYbySlash(comm_datee),
        END_AT: formatAsMMDDYYYYSlash(endAtDate[0]?.endAtDate),
      };

      // Update data
      const updateData = {
        PLAN_OPTION: optionId,
        DEATH_COVERAGE: deathCoverage,
        JNAME: 'Saifur Rahman',
        JAGE: jointAge,
        MATURITY: '5/17/2045',
        CAGE: 2,
        CNAME: 'Anahita',
        TABLE_ID: planName,
        TERM: selectTerm,
        INSTMODE: paymentMode,
        SUM_INSURE: sumassurance[0] || sumAssured,
        PREMIUM: basicPrem || pmode,
        SUMATRISK: sumAtRisk,
        OERATE: oeRate,
        OEPREM: oePrem,
        HOSPREMIUM: hPrem,
        HOSRATE: hRate,
        ACCCODE: supplimentId,
        CLASS: supplimentClass,
        ACCRATE: suppliment_rate,
        ACCPREM: sPrem,
        WAIVER_OF_PREMIUM: premiumWaiver,
        MAJOR_DIS_RATE: mdrRatee,
        MAJOR_DIS_RIDER: mdrPrem,
        IPD_RIDER: ipdPrem,
        TOTAL_PREM: finalPremiumCalculation,
      };

      // Sanitize updateData by removing empty or null fields
      const sanitizedUpdateData = {};
      Object.keys(updateData).forEach((key) => {
        if (updateData[key] !== undefined && updateData[key] !== null && updateData[key] !== '') {
          sanitizedUpdateData[key] = updateData[key];
        }
      });

      // Logging for debugging
      console.log('Sanitized Update Data:', sanitizedUpdateData);

      // First, delete existing records
      await axios.delete(`http://115.127.36.173:5001/api/ipdRider/delete/${encodedProposalNo}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: { REFNO: insertData.REFNO },
      });

      // Then, insert new records
      await axios.post('http://115.127.36.173:5001/api/ipdRider', [insertData], {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Finally, update records
      const response = await axios.put(
        `http://115.127.36.173:5001/api/update-proposal-dummy/${encodedProposalNo}`,
        sanitizedUpdateData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log('Data updated successfully:', response.data);
    } catch (error) {
      console.error('Error during request:', error);
    }
  };

  //3rd page 
  // Initialize state with 7 rows

  const [familyHistoryData, setFamilyHostoryData] = useState([])
  console.log(familyHistoryData)
  const [rows, setRows] = useState([
    {
      relation: '',
      healthStatus: '',
      age: '',
      ageAtDeath: '',
      causeOfDeath: '',
      durationOfDisease: '',
      deathYear: ''
    },
    // Additional rows can be added here
  ]);
  console.log(rows)
  const handleInputChange = (index, field, value) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row, i) => {
        if (i === index) {
          const updatedRow = { ...row, [field]: value };

          if (field === "healthStatus") {
            if (value === "Late") {
              updatedRow.age = "";
            } else if (value === "Good" || value === "Sick") {
              updatedRow.ageAtDeath = "";
              updatedRow.deathYear = "";
              updatedRow.causeOfDeath = "";
              updatedRow.durationOfDisease = "";
            }
          }

          return updatedRow;
        }
        return row;
      });

      return updatedRows;
    });
  };

  const handleFamilySubmit = async () => {
    try {
      const formattedRows = rows.map((row) => ({
        PROPOSAL_N: newProposalNo?.proposal_no[0] || proposalNo,
        RELCODE: row.relation || '',
        REL_AGE: row.age || '',
        REL_PHYSICAL: row.healthStatus || '',
        DEATH_AGE: row.ageAtDeath || null,
        DEATH_CAUSE: row.causeOfDeath || null,
        DISEASE_TIME_MONTH: row.durationOfDisease || null,
        DEATH_YEAR: row.deathYear || null,
      }));

      console.log('Formatted Rows:', formattedRows);

      const response = await axios.post('http://115.127.36.173:5001/api/family-history', formattedRows);
      console.log('Data inserted successfully:', response.data);

      // Assuming response.data.data contains the newly inserted rows
      setFamilyHostoryData(prev => [...prev, ...response.data.data]);

      // Display the proposal number of the last inserted row
      if (response.data.data.length > 0) {
        const lastInsertedProposal = response.data.data[response.data.data.length - 1].PROPOSAL_N;
        alert(`Inserted proposal number: ${lastInsertedProposal}`);
      }

      // Reset the form fields
      setRows([{ relation: '', age: '', healthStatus: '', ageAtDeath: '', causeOfDeath: '', durationOfDisease: '', deathYear: '' }]);
    } catch (error) {
      console.error('Error inserting family history data:', error);
    }
  };
  const handlefamilyUpdateData = (data) => {
    setRows([data])
  }

  //get relId


  // Medical Info 4thpage
  const [healthInfo, setHealthInfo] = useState({
    fullyHealthy: "",
    admitHospital: "",
    surgeryRecord: "",
    diseasesList: "",
    addictionInfo: "",
    proposalDecline: "",
    currentMedication: "",
    disabilityInfo: "",
    infectionsDiseases: "",
    otherRisk: "",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setHealthInfo((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));
  };

  const [checkboxState, setCheckboxState] = useState({
    SD: "N",
    CR: "N",
    FMR: "N",
    SGPT: "N",
    SGOT: "N",
    PUR: "N",
    ESR: "N",
    CBC: "N",
    BILIRUBIN: "N",
    ECG: "N",
    "GAMMA GT": "N",
    GTT: "N",
    COLESTOROL: "N",
    "OTHER TEST": "N",
    FBS: "N",
    "URIC ACID": "N",
    "X RAY": "N",
  });

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: prevState[id] === "Y" ? "N" : "Y",
    }));
  };
  //Armed Force Info
  const [armedForceInfo, setArmedForceInfo] = useState({
    designation: 'YES',
    category: 'GOOD',
  });

  const handleArmedForceChange = (e) => {
    const { name, value } = e.target;

    setArmedForceInfo((prevState) => ({
      ...prevState,
      [name]: value,  // Update the value based on the input
    }));
  };

  console.log(armedForceInfo.designation)

  //physical measurement
  const [formValues, setFormValues] = useState({
    heightType: 'INCH',
    height: '',
    weightType: 'KILOGRAM',
    weight: '',
    chestOnbreatType: 'INCH',
    chestOnbreat: '',
    chestBreatlessType: 'INCH',
    chestBreatless: '',
    stomachType: 'INCH',
    stomach: ''
  });

  const handlePhysicalInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value.toUpperCase()
    });
  };
  console.log(formValues.chestOnbreatType, formValues.chestOnbreat)

  // ==========Start previous policy to sumAssurance========

  const initialRowsForPolicy = Array(3).fill().map(() => ({
    policyNo: '',
    sumAssured: ''
  }));

  const [policyRows, setPolicyRows] = useState(initialRowsForPolicy);
  const [totalSumAssured, setTotalSumAssured] = useState(0);
  const [policyIndex, setPolicyIndex] = useState(null);
  const [policy1, setPolicy1] = useState({ policyNo: '', sumAssured: 0 });
  const [policy2, setPolicy2] = useState({ policyNo: '', sumAssured: 0 });
  const [policy3, setPolicy3] = useState({ policyNo: '', sumAssured: 0 });
  const [policy4, setPolicy4] = useState({ policyNo: '', sumAssured: 0 });
  const [policy5, setPolicy5] = useState({ policyNo: '', sumAssured: 0 });

  // Add more as needed

  // Extract values based on the rows
  useEffect(() => {
    if (policyRows.length > 0) {
      setPolicy1({
        policyNo: policyRows[0]?.policyNo || '',
        sumAssured: policyRows[0]?.sumAssured || 0,
      });
      setPolicy2({
        policyNo: policyRows[1]?.policyNo || '',
        sumAssured: policyRows[1]?.sumAssured || 0,
      });
      setPolicy3({
        policyNo: policyRows[2]?.policyNo || '',
        sumAssured: policyRows[2]?.sumAssured || 0,
      });
      setPolicy4({
        policyNo: policyRows[3]?.policyNo || '',
        sumAssured: policyRows[3]?.sumAssured || 0,
      });
      setPolicy5({
        policyNo: policyRows[4]?.policyNo || '',
        sumAssured: policyRows[4]?.sumAssured || 0,
      });

      // Add more as needed for additional policies
    }
  }, [policyRows]);
  console.log(policy1, policy2, policy3, policy4, policy5);
  // Handle input changes
  useEffect(() => {
    if (previousSumAssurance && policyIndex !== null) {
      const updatedRows = [...policyRows];
      updatedRows[policyIndex] = {
        ...updatedRows[policyIndex],
        sumAssured: previousSumAssurance.sumAssurance, // Assuming sumAssurance is the correct field from your API
      };
      setPolicyRows(updatedRows);
    }
  }, [previousSumAssurance, policyIndex]); // Run effect when previousSumAssurance or policyIndex changes

  // Handle input changes for policy rows
  const handlePolicyInputChange = (index, field, value) => {
    if (field === 'policyNo') {
      setPreviousPolicyNo(value); // Set the policy number to fetch sumAssured from DB
      setPolicyIndex(index); // Keep track of which row is being updated
    }

    // Update the specific row based on input changes
    const updatedRows = [...policyRows];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value, // Update the field (either policyNo or sumAssured)
    };
    setPolicyRows(updatedRows);
    // Recalculate total sum assured
    const total = updatedRows?.reduce((acc, row) => {
      return acc + (parseFloat(row.sumAssured) || 0); // Convert sumAssured to number
    }, 0);
    setTotalSumAssured(total);
  };

  // Add a new policy row
  const addPolicyRow = () => {
    setPolicyRows([...policyRows, { policyNo: '', sumAssured: '' }]);
  };

  // Handle row deletion
  const deletePolicyRow = (index) => {
    const updatedRows = policyRows.filter((_, i) => i !== index);
    setPolicyRows(updatedRows);

    // Recalculate total sum assured after row deletion
    const total = updatedRows.reduce((acc, row) => {
      return acc + (parseFloat(row.sumAssured) || 0);
    }, 0);
    setTotalSumAssured(total);
  };

  // Check if the first three rows are filled to enable the "add+" button
  const isAddButtonEnabled = () => {
    return policyRows.slice(0, 3).every(row => row.policyNo && row.sumAssured);
  };
  // ==========End previous policy to sumAssurance ========


  //Update Medical Information

  const updateMedicalInfo = async () => {
    const medicalInfo = {
      FULLY_HEALTHY: healthInfo.fullyHealthy === 'YES' ? 'Y' : 'N',
      ADMIT_HOSPITAL: healthInfo.admitHospital === 'YES' ? 'Y' : 'N',
      SURGERY_RECORD: healthInfo.surgeryRecord === 'YES' ? 'Y' : 'N',
      DISEASE_LIST: healthInfo.diseasesList === 'YES' ? 'Y' : 'N',
      ADDICTION_INFO: healthInfo.addictionInfo === 'YES' ? 'Y' : 'N',
      PROPOSAL_DECLINE: healthInfo.proposalDecline === 'YES' ? 'Y' : 'N',
      CURRENT_MEDICATION: healthInfo.currentMedication === 'YES' ? 'Y' : 'N',
      DISABILITY_INFO: healthInfo.disabilityInfo === 'YES' ? 'Y' : 'N',
      INFECTIOUS_DISEASE: healthInfo.infectionsDiseases === 'YES' ? 'Y' : 'N',
      OTHER_RISK: healthInfo.otherRisk === 'YES' ? 'Y' : 'N',
      ARMED_FORCE_DSGN: armedForceInfo.designation === 'YES' ? 'Y' : 'N',
      ARMED_HEALTH: armedForceInfo.category,
      HIGHT_TYPE: formValues.heightType,
      WEIGHT_TYPE: formValues.weightType,
      WEIGHT: formValues.weight,
      HIGHT_1: formValues.height,
      CHEST_ONBREAT_TYPE: formValues.chestOnbreatType,
      CHEST_ONBREAT: formValues.chestOnbreat,
      CHEST_BREATLESS_TYPE: formValues.chestBreatlessType,
      CHEST_BREATLESS: formValues.chestBreatless,
      STOMACH_MEASURE_TYPE: formValues.stomachType,
      STOMACH_MEASURE: formValues.stomach,
      "SD": checkboxState.SD,
      "CR": checkboxState.CR,
      "FMR": checkboxState.FMR,
      "PUR": checkboxState.PUR,
      "CBC": checkboxState.CBC,
      "ESR": checkboxState.ESR,
      "ECG": checkboxState.ECG,
      "FBS": checkboxState.FBS,
      "GTT": checkboxState.GTT,
      "X_RAY": checkboxState["X RAY"],
      "SGOT": checkboxState.SGOT,
      "SGPT": checkboxState.SGPT,
      "GAMMA_GT": checkboxState["GAMMA GT"],
      "BILIRUBIN": checkboxState.BILIRUBIN,
      "CHOLESTEROL": checkboxState.COLESTOROL,
      "URIC_ACID": checkboxState["URIC ACID"],
      "OTHER_TEST": checkboxState["OTHER TEST"],
    };

    const encodedProposalNo = encodeURIComponent(newProposalNo?.proposal_no[0]);
    console.log(encodedProposalNo);

    // Sanitize updateData by removing empty or null fields
    const sanitizedUpdateData = {};
    Object.keys(medicalInfo).forEach((key) => {
      if (medicalInfo[key] !== undefined && medicalInfo[key] !== null && medicalInfo[key] !== '') {
        sanitizedUpdateData[key] = medicalInfo[key];
      }
    });

    try {
      // Update the medical info
      const medicalResponse = await axios.put(`http://115.127.36.173:5001/api/medical-info/${encodedProposalNo}`, sanitizedUpdateData);

      if (medicalResponse.status === 200) {
        console.log('Medical info updated successfully');
      } else {
        console.log('No rows updated');
      }

      // Update the additional table
      const policyNoData = {
        POLICY_NO1: policy1.policyNo,
        POLICY_NO2: policy2.policyNo,
        POLICY_NO3: policy3.policyNo,
        POLICY_NO4: policy4.policyNo,
        POLICY_NO5: policy5.policyNo,
      };

      const policyResponse = await axios.put(`http://115.127.36.173:5001/api/prev-policy-no/${encodedProposalNo}`, policyNoData);

      if (policyResponse.status === 200) {
        console.log('Previous policy info updated successfully');
      } else {
        console.log('No rows updated');
      }

      // Show success notification
      swal({
        title: "Updated Successfully",
        text: `Medical Info and Policy Numbers updated`,
        icon: "success",
      });

    } catch (error) {
      console.error('Error updating medical info or previous policy info:', error);
      swal({
        title: "Error",
        text: 'Error updating medical info or previous policy info',
        icon: "error",
      });
    }
  };
  // nominee part 5th page
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    dob: '',
    age: '',
    idType: '',
    idNo: '',
    percentage: '',
    mobileNo: '',
    accNo: '',
    routingNo: '',
    guardianName: '',
    guardianRelation: '',
    guardianAge: '',
    guardianAccNo: '',
    guardianRoutingNo: '',
    nBankCode: '',
    slno: ''
  });
  console.log(formData.routingNo)
  // Handle input changes
  const handleNomineeInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({
      ...formData, // Keep the other fields unchanged
      [name]: value.toUpperCase(), // Update the specific field
    });
  };

  const { data: nomineeBankbranchList } = useGetNomineeBankbranchlistQuery(formData.nBankCode);
  const nomineeDob = formatAsMMDDYYYY(formData.dob)

  // get Nominee  age
  useEffect(() => {
    const fetchData = async () => {
      const nomineeDob = formatAsMMDDYYYY(formData.dob);
      const abc = `http://115.127.36.173:5001/api/get-nomineeAge/${comm_datee}/${nomineeDob}`;
      try {
        const response = await axios.get(abc);
        const age = response?.data?.age[0];
        setNomineeAge(response?.data);

        // Reset guardian fields if age is less than 18
        if (age < 18) {
          setFormData(prevData => ({
            ...prevData,
            guardianName: '',
            guardianRelation: '',
            guardianAge: '',
            guardianAccNo: '',
            guardianRoutingNo: '',
          }));
        }
      } catch (error) {
        console.error('Error fetching nominee age:', error);
      }
    };

    fetchData();
  }, [comm_datee, formData.dob, nomineeDob]);

  const isGuardianDisabled = nomineeAge?.age[0] > 18;

  //insert nominee data
  console.log(newProposalNo?.proposal_no[0], proposalNo)
  const handleNomineeInsert = async () => {
    if (!newProposalNo) {
      swal({
        title: 'Error',
        text: 'Proposal number is not available.',
        icon: "error",
      });
      return;
    }

    const dob = formatAsMMDDYYYY(formData.dob);
    const data = {
      PROPOSAL_N: newProposalNo?.proposal_no[0], // Use the fetched proposal number
      NAME: formData.name,
      RELATION: formData.relation,
      DOB: dob,
      AGE: nomineeAge?.age[0],
      PERCENTAGE: formData.percentage,
      ID_TYPE: '2',
      NN_ID_NUMBER: formData.idNo,
      N_MOBILE_NO: formData.mobileNo,
      ACC_NO: formData.accNo,
      ROUTINGNO: formData.routingNo,
      GUARDIAN: formData.guardianName || '',
      GRELATION: formData.guardianRelation || '',
      GAGE: formData.guardianAge || '',
      GACCNO: formData.guardianAccNo || '',
      GROUTINGNO: formData.guardianRoutingNo || '',
    };

    try {
      const response = await axios.post("http://115.127.36.173:5001/api/nominees", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success === true) {
        swal({
          title: 'Successful',
          text: `${response.data.message}`,
          icon: "success",
        });

        // Reset form data
        setFormData({
          name: '',
          relation: '',
          dob: '',
          percentage: '',
          idNo: '',
          mobileNo: '',
          accNo: '',
          routingNo: '',
          guardianName: '',
          guardianRelation: '',
          guardianAge: '',
          guardianAccNo: '',
          guardianRoutingNo: '',
        });
        setNomineeAge(null);
        // Fetch the newly inserted nominee data
        const encodedProposalNo = encodeURIComponent(newProposalNo?.proposal_no[0]);
        const fetchResponse = await axios.get(`http://115.127.36.173:5001/api/nominee/${encodedProposalNo}`);

        if (fetchResponse && fetchResponse?.data) {
          setNomines(fetchResponse.data);
        } else {
          console.error("No data found after insertion.");
        }
      }
    } catch (error) {
      console.error("Error saving proposal:", error.message);

      if (error.response && error.response.data.message) {
        swal({
          title: 'Error',
          text: error.response.data.message,
          icon: "error",
        });
      }
    }
  };

  const handleGetRowData = (rowData) => {
    console.log(rowData)
    setFormData({
      proposal_n: rowData.proposal_n,
      name: rowData.name,
      age: rowData.age,
      dob: formatAsMMDDYYYYSlash(rowData.dob),
      relation: rowData.relation,
      percentage: rowData.percentage,
      id_type: rowData.id_type,
      idNo: rowData.nn_id_number,
      mobileNo: rowData.n_mobile_no,
      accNo: rowData.acc_no,
      routingNo: rowData.routingno,
      guardianName: rowData.guardian || '',     // Set to empty string if null
      guardianAge: rowData.gage || '',             // Set to empty string if null
      guardianRelation: rowData.grelation || '',   // Set to empty string if null
      guardianAccNo: rowData.gaccno || '',         // Set to empty string if null
      guardianRoutingNo: rowData.groutingno || '', // Set to empty string if null
      slno: rowData.slno
    });
  }
  const sanitizeData = (data) => {
    const formattedData = {
      NAME: formData.name,
      RELATION: formData.relation,
      DOB: formData.dob,
      AGE: nomineeAge?.age[0],
      PERCENTAGE: formData.percentage,
      ID_TYPE: '2',
      NN_ID_NUMBER: formData.idNo,
      N_MOBILE_NO: formData.mobileNo,
      ACC_NO: formData.accNo,
      ROUTINGNO: formData.routingNo,
      GUARDIAN: formData.guardianName,
      GRELATION: formData.guardianRelation,
      GAGE: formData.guardianAge,
      GACCNO: formData.guardianAccNo,
      GROUTINGNO: formData.guardianRoutingNo,
    };

    // Remove empty or undefined fields
    return Object.fromEntries(
      Object.entries(formattedData).filter(([key, value]) => value !== '' && value !== undefined)
    );
  };
  const handleNomineeUpdate = async () => {
    try {
      // Sanitize the form data before sending it to the server
      const sanitizedData = sanitizeData(formData);

      // Make the PUT request to update the nominee
      const response = await axios.put(`http://115.127.36.173:5001/api/nominee/${formData.slno}`, sanitizedData);

      // Show success message using swal if update is successful
      swal({
        title: 'Successful',
        text: response.data.message || 'Nominee information updated successfully!',
        icon: 'success',
        button: 'OK',
      });

      // Reset form data after successful update
      setFormData({
        name: '',
        relation: '',
        dob: '',
        age: '',
        idType: '',
        idNo: '',
        percentage: '',
        mobileNo: '',
        accNo: '',
        routingNo: '',
        guardianName: '',
        guardianRelation: '',
        guardianAge: '',
        guardianAccNo: '',
        guardianRoutingNo: '',
      });

      setNomineeAge(null);  // Reset specific fields
      fetchNomines();       // Fetch updated nominee list

    } catch (error) {
      console.error('Error updating data:', error);

      // Check for the specific error message related to percentage > 100
      if (error.message.includes('Percentage is already 100%')) {
        swal({
          title: 'Error',
          text: error.message,  // This will show "Percentage is already 100% for proposal ${PROPOSAL_N}"
          icon: 'error',
          button: 'OK',
        });
      } else {
        // Show a generic error message if it's not the percentage error
        swal({
          title: 'Error',
          text: error.response?.data?.message || 'Failed to update nominee information.',
          icon: 'error',
          button: 'Try Again',
        });
      }
    }
  };
  //delete nomineee

  const deleteNominee = async (slno) => {
    const nomineeId = 112290; // Replace with the nominee ID you want to delete
    const apiUrl = `http://115.127.36.173:5001/api/nominee/delete/${slno}`;

    try {
      const response = await axios.delete(apiUrl);
      console.log('Nominee deleted:', response.data);
      swal({
        title: 'Successfully deleted',
        icon: 'success',
        button: 'OK',
      });
      fetchNomines();
    } catch (error) {
      console.error('Error deleting nominee:', error.response?.data || error.message);
    }
  };
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
                <option value="">SELECT</option>
                {branchList?.map((branchName, i) => (
                  <option key={i} value={branchName.branch_id}>
                    {branchName.branch_id} - {branchName.branch_name}
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
                  value={proposal_date || commenceDate}
                  className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                  onChange={handleproposalDateChange}
                />
              ) : (
                <input
                  type="date"
                  id="success"
                  value={commenceDate}
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
                  value={policytype === '1' ? commenceDate : risk_date}
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
                      value={gender}
                    >
                      <>
                        <option>Select Gender</option>
                        {genderList?.map((g, i) => (
                          <option key={i} value={g?.gender_id}>
                            {g?.gender_name}
                          </option>
                        ))}
                      </>

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

                    {proposalInfo[0]?.spouse ? (
                      <input
                        type="text"
                        id="success"
                        value={
                          proposalInfo[0]?.spouse
                          || ""
                        }
                        class="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        onChange={handleSpouse}
                      />
                    ) : (
                      <input
                        type="text"
                        id="success"
                        className="form-input uppercase text-sm shadow border-[#E3F2FD] mt-1 w-full"
                        value={spouseName}
                        onChange={handleSpouse}
                        disabled={maritalStatus !== '1'}
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
                          value={calcuAge || proposalInfo[0]?.age}
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
                          // onChange={handleReligion}
                          // onchange={setReligion}
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={religion}
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
                          {/* {
                            proposalInfo[0]?.edu ?
                              <input
                                type="text"
                                id="success"
                                value={proposalInfo[0]?.edu || ''}
                                className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                              /> : */}
                          <select
                            onChange={(e) => setEduId(e.target.value)}
                            className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                            value={eduId}
                          >
                            {educationList?.map((education, i) => (
                              <option key={i} value={education?.education_id}
                              >
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
                            onChange={(e) => setOccupation(e.target.value)}
                            // onChange={handleOccupation}
                            className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                            value={occupation}
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
          <div class="p-1 mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="text-start px-2">
              <div className="shadow border-2 rounded p-1 mt-2 mb-3">
                <h2 className=" text-center font-bold text-success  p-2 rounded text-xs text-dark">
                  PREMIUM CALCULATION
                </h2>

                <div class="p-0 mb-0 flex grid grid-cols-1 rounded  mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">

                  <div className="text-start px-2">
                    <label className="text-start text-xs">PLAN LIST</label>
                    <select
                      onChange={handlePlan}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      value={planId}  // Ensure value matches one of the dropdown options
                    >
                      <option>Select Plan</option>
                      {planList?.map((plan, i) => {
                        const optionValue = `${plan?.plan_id}-${plan?.calcu_type}-${plan?.suplimentary}-${plan?.extra_loading}-${plan?.major_diseage}-${plan?.impatient_reader}-${plan?.prem_waiver}-${plan?.min_age}-${plan?.max_age}-${plan?.min_term}-${plan?.max_term}-${plan?.min_suminsured}-${plan?.max_suminsured}`;

                        return (
                          <option key={i} value={optionValue}>
                            {plan?.plan_id}-{plan?.plan_name}
                          </option>
                        );
                      })}
                    </select>

                  </div>

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
                      <label className="text-sm p-2">JOINT LIFE PROPOSER</label>
                      <div className="mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                        <div className="bg-white align-items-center m-1 lg:mt-0">
                          <input
                            type="text"
                            id="success"
                            className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            placeholder="JNAME"
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
                            onChange={(e) => setJAge(e.target.value)}
                          />
                        </div>

                        <div className="bg-white align-items-center m-1 lg:mt-0">
                          <input
                            type="text"
                            id="success"
                            className="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                            placeholder="JAGE"
                            value={jointAge}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {(planName === '22' || planName === '23') && (
                  <div class="mb-2 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                    <div className="text-start px-2">
                      <label className="text-start text-xs">SELECT AN OPTION</label>
                      <select
                        onChange={handleOption}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      >
                        <>
                          <option>Select an option</option>
                          {options?.map((item, i) => (
                            <option
                              key={i}
                              value={item?.options}
                            >
                              {item?.description}
                            </option>
                          ))}
                        </>
                      </select>
                    </div>
                    <div className="text-start px-2">
                      <label className="text-start text-xs">DEATH COVERAGE</label>
                      <select
                        onChange={handleDeathCoverae}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      >
                        <>
                          <option>Select</option>
                          <option>YES</option>
                          <option>NO</option>
                        </>
                      </select>
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

                    <div>
                      <label className="text-start text-xs">
                        TERM OF POLICY
                      </label>
                      <select
                        onChange={(e) => setTerm(e.target.value)}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        value={selectTerm} // Ensure a default value or set it to an empty string initially
                      >
                        <option value="">Select Term</option>
                        {termList?.length > 0 &&
                          termList.map((termm, i) => (
                            <option key={i} value={termm.term}>
                              {termm.term}
                            </option>
                          ))}
                      </select>

                    </div>

                  </div>
                </div>
                <div class="mb-2 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
                  <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">

                    <div className=" bg-white align-items-center m-1  lg:mt-0">
                      <label className="text-start text-xs">PAYMENT MODE</label>
                      <select
                        onChange={(e) => setPaymentMode(e.target.value)}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                        value={paymentMode}
                      >
                        <option value="">Select Mode</option> {/* Set value to empty string */}

                        {modeList?.length > 0 && modeList?.map((mode, i) => (
                          <option key={i} value={mode.mode_code}>
                            {mode.mode_code}-{mode.mode_name}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>
                  <div className="bg-white  align-items-center m-1  lg:mt-0">
                    <label className="text-xs text-center w-36 mt-3 p-0">
                      MATURITY DATE
                    </label>
                    <input
                      type="text"
                      id="success"
                      // value={proposalInfo[0]?.sumatrisk}
                      value={maturityDate}
                      disabled
                      class="form-input text-sm shadow border-[#E3F2FD] mt-1 w-full"
                    />
                  </div>
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

                  <div class="mb-0 flex grid grid-cols-3 rounded mt-0 lg:grid-cols-3 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
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
                    <div className="bg-white align-items-center m-1 lg:mt-0">
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
                    <h2 className="text-xs font-bold ml-2">LOADING EXTRA</h2>

                    <div class=" mb-0 flex grid grid-cols-2 rounded  mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center  p-1  lg:mx-auto lg:mt-0">
                      <div className="bg-white flex align-items-center m-1  lg:mt-0">
                        <label className="text-xs text-start w-80 mt-3 p-0">
                          OE PREM & RATE
                        </label>
                        <input
                          onChange={(e) => setOEPrem(e.target.value)}
                          type="text"
                          id="success"
                          disabled
                          // value={occupation !== '1' ? hosPremRate : 0}
                          value={proposalInfo[0]?.oePrem || oePrem}
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                        <input
                          onChange={(e) => setOERate(e.target.value)}
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
                          onChange={(e) => setHPrem(e.target.value)}
                          type="text"
                          id="success"
                          disabled
                          // value={hosRate ? hosRate : 0}
                          // value={
                          //   (gender === '2' && occupation === '1') || [1, 2, 3].includes(eduId)
                          //     ? hosPremRate
                          //     : 0
                          // }
                          value={proposalInfo[0]?.hPrem || hPrem}
                          class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                        />
                        <input
                          onChange={(e) => setHRate(e.target.value)}
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
                                  value={sPrem || proposalInfo[0]?.sPrem || 0}
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

                          <div className="bg-white mt-1 lg:mt-0 flex items-center justify-items-center">
                            <label className={`text-start text-sm ${suplimentary === 'NO' ? 'w-3/4' : 'w-2/3'}`}>Do you want to Waiver Prem</label>
                            <select
                              className={`form-input text-xs shadow border-[#E3F2FD] mt-0 ${suplimentary === 'NO' ? 'w-1/4' : 'w-1/3'}`}
                              onChange={handleWaiverPremChange}
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
                                  value={premiumWaiver || proposalInfo[0]?.premiumWaiver || 0}
                                  class="form-input text-xs shadow border-[#E3F2FD] mt-1 w-full"
                                />
                              </div>
                            </>
                          }
                        </div>
                      </div></>
                  }
                  {
                    major_diseage === 'YES' && ipdRider === 'NO' &&
                    <>
                      <div className="shadow  border-2  m-0 rounded p-0">
                        <div class=" mb-0 grid grid-cols-3 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center  p-2  lg:mx-auto lg:mt-0">
                          <div className="bg-white m-1 lg:mt-0 flex items-center justify-items-center">
                            <label className={`text-start text-sm ${suplimentary === 'NO' ? 'w-3/4' : 'w-2/3'}`}>Do you want to MDR</label>
                            <select
                              className={`form-input text-xs shadow border-[#E3F2FD] mt-0 ${suplimentary === 'NO' ? 'w-3/4' : 'w-1/3'}`}
                              onChange={handleMDRChange}
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
                                  value={mdrRatee}
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
                                  value={mdrPrem || proposalInfo[0]?.mdrPrem}
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
                impatient_reader === 'YES' && mdr === 'NO' &&
                <>
                  <div className="text-start mb-3">
                    <div className="shadow-lg border m-1 rounded p-1">
                      <h2 className="text-xs font-bold ml-2 py-2">IPD TREATMENT RIDER</h2>
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
                          <div className="mb-0 flex grid grid-cols-2 gap-1 w-full justify-center align-items-center p-1 lg:mx-auto">
                            <div className="bg-white flex items-center m-1 lg:mt-0">
                              <label className="w-24 text-start text-xs mr-2">PLAN PREM</label>
                              <select
                                onChange={handleIpdplan}
                                className="form-input text-sm shadow border-[#E3F2FD] w-full"
                              >
                                <option>SELECT PLAN PREM</option>
                                {ipdPlans?.map((item, i) => (
                                  <option key={item?.plan_no} value={`${item?.plan_no}-${item?.yly_max_benefit}`}>
                                    {item?.plan_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="bg-white flex items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-32 mr-2">PREMIUM</label>
                              <input
                                type="text"
                                id="success"
                                value={ipdPrem || proposalInfo[0]?.ipdPrem}
                                className="form-input text-xs shadow border-[#E3F2FD] w-full"
                              />
                            </div>
                          </div>
                          <div className="mb-0 flex grid grid-cols-3 gap-1 w-full justify-center items-center p-1 lg:mx-auto">
                            <div className="bg-white flex items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-24 mr-2">BENEFITS</label>
                              <input
                                type="text"
                                id="success"
                                value={ipdBenefit || 0}
                                className="form-input text-xs shadow border-[#E3F2FD] w-full"
                              />
                            </div>
                            <div className="bg-white flex items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-48 mr-2">START FROM</label>
                              <input
                                type="text"
                                id="success"
                                value={risk_date}
                                className="form-input text-xs shadow border-[#E3F2FD] w-full"
                              />
                            </div>
                            <div className="bg-white flex items-center m-1 lg:mt-0">
                              <label className="text-xs text-start w-24 mr-2">END AT</label>
                              <input
                                type="text"
                                id="success"
                                value={endAtdateFormatted ? endAtdateFormatted : '-'}
                                className="form-input text-xs shadow border-[#E3F2FD] w-full"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>

              }

              <div className="bg-white flex flex-col items-center justify-center mx-auto lg:mt-0 w-full">
                <div className="flex items-center gap-4 w-full">
                  <label className="text-sm font-bold text-start p-0 w-1/4">
                    TOTAL EXTRA
                  </label>
                  <input
                    type="text"
                    id="success"
                    disabled
                    // value={extraTotalPrem ? extraTotalPrem : "0"}
                    value={extraTotal || 0}

                    className="form-input text-sm shadow border-[#E3F2FD] w-3/4"
                  />
                </div>

                <div className="flex items-center gap-4 w-full mt-4">
                  <label className="text-sm font-bold text-start p-0 w-1/4">
                    TOTAL PREMIUM
                  </label>
                  <input
                    type="text"
                    id="success"
                    value={finalPremiumCalculation || 0}
                    className="form-input text-sm shadow border-[#E3F2FD] w-3/4"
                  />
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
                        <option>SELECT BANK</option>
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
                        <option>SELECT BRANCH</option>
                        {bankbranchList?.map((branch, i) => (
                          <option key={i} value={branch?.routing_no}>
                            {branch?.branch_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleUpdatePremInfo}
              type="submit"
              class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              UPDATE
            </button>
          </div>
        </div>)
        : selectedTopbarItem === "P" ? <div className="my-2 text-center text-lg text-red-600">Please fill up the proposal info form</div> : ''
      }
      {selectedTopbarItem === "FAMILY" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          {/* postponded by sir 9/8/2024 */}
          {/* <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
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
                          FAMILY ENTRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ====medical  and family members part start==== */}
          <div className="p-1 mb-0 grid grid-cols-1 rounded px-4 mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="overflow-hidden">
                  <div
                    className={`relative ${rows.length > 7 ? 'max-h-96 overflow-y-auto' : 'max-h-full'}`}
                    style={{ maxHeight: '32rem' }}  // Adjust height as needed
                  >
                    <table className="min-w-full table-fixed border border-gray-200">
                      <thead className="sticky top-0 ">
                        <tr>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/6 bg-gray-50">RELATION</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/6 bg-gray-50">PRESENT HEALTH STATUS</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/12 bg-gray-50">AGE</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/12 bg-gray-200">AGE AT DEATH</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/6 bg-gray-200">CAUSE OF DEATH</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/6 bg-gray-200">DURATION OF DISEASE</th>
                          <th className="border-r border-gray-300 px-4 py-2 w-1/6 bg-gray-200">DEATH YEAR</th>
                          <th className="border px-4 py-2 w-1/12 bg-gray-200">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, index) => (
                          <tr key={index}>
                            <td className="border-r border-gray-300 px-4 py-2">
                              <select
                                value={row.relation || row.RELCODE}
                                onChange={(e) => handleInputChange(index, "relation", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={index > 0 && !isRowFilled(rows[index - 1])}
                              >
                                <option value="">Select</option>
                                <option value="04">Father</option>
                                <option value="05">Mother</option>
                                <option value="03">Brother</option>
                                <option value="06">Sister</option>
                                <option value="40">Spouse</option>
                                <option value="11">Son</option>
                                <option value="12">Daughter</option>
                              </select>
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2">
                              <select
                                value={row.healthStatus || row.REL_PHYSICAL}
                                onChange={(e) => handleInputChange(index, "healthStatus", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={index > 0 && !isRowFilled(rows[index - 1])}
                              >
                                <option value="">Select</option>
                                <option value="Good">Good</option>
                                <option value="Sick">Sick</option>
                                <option value="Late">Late</option>
                              </select>
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2">
                              <input
                                type="number"
                                value={row.age || row.REL_AGE}
                                onChange={(e) => {
                                  let value = parseInt(e.target.value, 10);
                                  if (!isNaN(value)) {
                                    if (value < 16) value = 16;
                                    else if (value > 99) value = 99;
                                    handleInputChange(index, "age", value);
                                  }
                                }}
                                className="w-full border-gray-300 rounded"
                                disabled={row.healthStatus === "Late" || (index > 0 && !isRowFilled(rows[index - 1]))}
                              />
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2 bg-gray-100">
                              <input
                                type="text"
                                value={row.ageAtDeath || row.DEATH_AGE}
                                onChange={(e) => handleInputChange(index, "ageAtDeath", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={row.healthStatus !== "Late" || (index > 0 && !isRowFilled(rows[index - 1]))}
                              />
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2 bg-gray-100">
                              <input
                                type="text"
                                value={row.causeOfDeath || row.DEATH_CAUSE}
                                onChange={(e) => handleInputChange(index, "causeOfDeath", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={row.healthStatus !== "Late" || (index > 0 && !isRowFilled(rows[index - 1]))}
                              />
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2 bg-gray-100">
                              <input
                                type="text"
                                value={row.durationOfDisease || row.DISEASE_TIME_MONTH}
                                onChange={(e) => handleInputChange(index, "durationOfDisease", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={row.healthStatus !== "Late" || (index > 0 && !isRowFilled(rows[index - 1]))}
                              />
                            </td>
                            <td className="border-r border-gray-300 px-4 py-2 bg-gray-100">
                              <input
                                type="text"
                                value={row.deathYear || row.DEATH_YEAR}
                                onChange={(e) => handleInputChange(index, "deathYear", e.target.value)}
                                className="w-full border-gray-300 rounded"
                                disabled={row.healthStatus !== "Late" || (index > 0 && !isRowFilled(rows[index - 1]))}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2">
            <button
              onClick={handleFamilySubmit}
              type="submit"
              class="rounded text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              SUBMIT
            </button>
          </div>
          <>
            {
              familyHistoryData?.length !== 0 &&
              <div className="overflow-x-auto mt-2">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
                      <th className="py-3 px-6 text-left">RELATION </th>
                      <th className="py-3 px-6 text-left">PRESENT HEALTH STATUS</th>
                      <th className="py-3 px-6 text-left">AGE</th>
                      <th className="py-3 px-6 text-left">AGE AT DEATH</th>
                      <th className="py-3 px-6 text-left">CAUSE OF DEATH</th>
                      <th className="py-3 px-6 text-left">DURATION OF DISEASE</th>
                      <th className="py-3 px-6 text-left">DEATH YEAR</th>
                      <th className="py-3 px-6 text-left">ACTION</th>

                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                    {familyHistoryData?.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {row.RELCODE === "04" ? "FATHER" :
                            row.RELCODE === "05" ? "MOTHER" :
                              row.RELCODE === "03" ? "BROTHER" :
                                row.RELCODE === "06" ? "SISTER" :
                                  row.RELCODE === "11" ? "SON" :
                                    row.RELCODE === "12" ? "DAUGHTER" :
                                      row.RELCODE === "40" ? "SPOUSE" :
                                        row.RELCODE}  {/* Default to original RELCODE if it doesn't match */}
                        </td>

                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.REL_PHYSICAL}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.REL_AGE}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.DEATH_AGE}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.DEATH_CAUSE}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.DISEASE_TIME_MONTH}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.DEATH_YEAR}</td>

                        <td className="py-3 px-6 text-left whitespace-nowrap text-xl text-red-800 flex items-center space-x-2"> <FontAwesomeIcon
                          onClick={() => handlefamilyUpdateData(row)}
                          icon={faPenToSquare}
                          className="text-blue-500 cursor-pointer"
                        /><FontAwesomeIcon icon={faTrash} onClick={() => deleteNominee(row.slno)} className="text-red-600 cursor-pointer" /> </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </>
        </div>
      )}

      {selectedTopbarItem === "MEDICAL" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          <div class="p-1 mb-0 flex grid grid-cols-1 rounded     mt-0 lg:grid-cols-4 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
            <div className="col-span-2">
              <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-2 gap-0  w-full  justify-center align-items-center lg:mx-auto lg:mt-0">
                <div className="text-start col-span-1 px-2">
                  <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                    <h2 className="text-center font-bold text-success p-1 rounded text-xs text-dark">
                      HEALTH INFORMATION
                    </h2>

                    {/* Fully Healthy */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Fully Healthy</label>
                        <select
                          name="fullyHealthy"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.fullyHealthy}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Admit Hospital */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Admit Hospital</label>
                        <select
                          name="admitHospital"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.admitHospital}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Surgery Record */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Surgery Record</label>
                        <select
                          name="surgeryRecord"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.surgeryRecord}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Diseases List */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Diseases List</label>
                        <select
                          name="diseasesList"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.diseasesList}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Addiction Info */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Addiction Info</label>
                        <select
                          name="addictionInfo"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.addictionInfo}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Proposal Decline */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Proposal Decline</label>
                        <select
                          name="proposalDecline"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.proposalDecline}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Current Medication */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Current Medication</label>
                        <select
                          name="currentMedication"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.currentMedication}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Disability Info */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Disability Info</label>
                        <select
                          name="disabilityInfo"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.disabilityInfo}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Infections Diseases */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Infections Diseases</label>
                        <select
                          name="infectionsDiseases"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.infectionsDiseases}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Other Risk */}
                    <div className="p-1 mb-0 flex grid grid-cols-1 rounded lg:grid-cols-1 w-full">
                      <div className="text-start flex px-2">
                        <label className="text-center mt-2 text-sm w-60">Other Risk</label>
                        <select
                          name="otherRisk"
                          className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                          value={healthInfo.otherRisk}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-start px-2 mb-3">
                  <div className="p-1 mb-0 flex grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-1">
                    <div className="text-start bg-gray mb-4 m-1">
                      <div className="h-[500px] shadow border-2 m-0 rounded p-0">
                        <h2 className="text-center font-bold text-success p-1 rounded text-xs text-dark">
                          DIAGNOSTIC TEST
                        </h2>
                        {/* Wrapping checkboxes in a two-column grid */}
                        <div className="grid grid-cols-2 gap-4 p-2">
                          {Object.keys(checkboxState).map((testName, index) => (
                            <div
                              key={testName}
                              className="mb-0 flex items-center gap-1 justify-start"
                            >
                              <Checkbox
                                id={testName}
                                checked={checkboxState[testName] === "Y"}
                                onChange={handleCheckboxChange}
                              />
                              <Label className="italic pr-3" htmlFor={testName}>
                                {testName}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {
                  gender === '2' && <div class=" p-1 mb-0 flex col-span-2 grid grid-cols-1 rounded     mt-0 lg:grid-cols-1 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-1">
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
                }
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
                    <select
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      name="designation"
                      value={armedForceInfo.designation}
                      onChange={handleArmedForceChange}
                    >
                      <>
                        <option>YES</option>
                        <option>NO</option>
                      </>
                    </select>
                  </div>
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2  text-sm  w-60">
                      Health Category
                    </label>
                    <select
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      name="category"
                      value={armedForceInfo.category}
                      onChange={handleArmedForceChange}
                    >
                      <>
                        <option>GOOD</option>
                        <option>SICK</option>
                      </>
                    </select>
                  </div>
                </div>
              </div>

              <div className="shadow border-2 h-100 rounded p-1 mt-2 mb-3">
                <h2 className="text-center font-bold text-success p-1 rounded text-xs text-dark">
                  PHYSICAL MEASUREMENTS
                </h2>

                {/* Height Type */}
                <div className="p-1 mb-2 flex grid grid-cols-2 rounded lg:grid-cols-2 gap-0 w-full justify-center align-items-center">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2 text-sm w-60">Height Type</label>
                    <select
                      name="heightType"
                      value={formValues.heightType}
                      onChange={handlePhysicalInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>INCH</option>
                      <option>CENTIMETER</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="height"
                    value={formValues.height}
                    onChange={handlePhysicalInputChange}
                    className="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>

                {/* Weight Type */}
                <div className="p-1 mb-2 flex grid grid-cols-2 rounded lg:grid-cols-2 gap-0 w-full justify-center align-items-center">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2 text-sm w-60">Weight Type</label>
                    <select
                      name="weightType"
                      value={formValues.weightType}
                      onChange={handlePhysicalInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>KILOGRAM</option>
                      <option>PUND</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="weight"
                    value={formValues.weight}
                    onChange={handlePhysicalInputChange}
                    className="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>

                {/* Chest Onbreat Type */}
                <div className="p-1 mb-2 flex grid grid-cols-2 rounded lg:grid-cols-2 gap-0 w-full justify-center align-items-center">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2 text-sm w-60">Chest Onbreat Type</label>
                    <select
                      name="chestOnbreatType"
                      value={formValues.chestOnbreatType}
                      onChange={handlePhysicalInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>INCH</option>
                      <option>CENTIMETER</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="chestOnbreat"
                    value={formValues.chestOnbreat}
                    onChange={handlePhysicalInputChange}
                    className="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>

                {/* Chest Breatless Type */}
                <div className="p-1 mb-2 flex grid grid-cols-2 rounded lg:grid-cols-2 gap-0 w-full justify-center align-items-center">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2 text-sm w-60">Chest Breatless Type</label>
                    <select
                      name="chestBreatlessType"
                      value={formValues.chestBreatlessType}
                      onChange={handlePhysicalInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>INCH</option>
                      <option>CENTIMETER</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="chestBreatless"
                    value={formValues.chestBreatless}
                    onChange={handlePhysicalInputChange}
                    className="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>

                {/* Stomach Type */}
                <div className="p-1 mb-2 flex grid grid-cols-2 rounded lg:grid-cols-2 gap-0 w-full justify-center align-items-center">
                  <div className="text-start flex px-2">
                    <label className="text-center mt-2 text-sm w-60">Stomach Type</label>
                    <select
                      name="stomachType"
                      value={formValues.stomachType}
                      onChange={handlePhysicalInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>INCH</option>
                      <option>CENTIMETER</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="stomach"
                    value={formValues.stomach}
                    onChange={handlePhysicalInputChange}
                    className="form-input text-xs p-1 shadow border-[#E3F2FD] mt-1 w-full"
                  />
                </div>
              </div>

              {/* Option And Policy status , its move from premium info Tab(2nd page) */}
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
              {/* previous policy entry */}
              <div className="p-1 mb-0 grid grid-cols-1 rounded px-4 mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                <h2 className=" text-center font-bold text-success  p-1 rounded text-xs text-dark">
                  PREVIOUS POLICY NO
                </h2>
                {/* <div class="p-1 mb-0 flex grid grid-cols-2 rounded     mt-0 lg:grid-cols-6 gap-0  w-full  justify-center align-items-center   lg:mx-auto lg:mt-0">
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
                </div> */}

                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                      <div
                        className={`relative ${policyRows.length > 3 ? 'max-h-96 overflow-y-auto' : 'max-h-full'}`}
                        style={{ maxHeight: '12rem' }} // Adjust height as needed
                      >
                        <table className="min-w-full table-fixed border border-gray-200">
                          <thead className="sticky top-0">
                            <tr>
                              <th className="border-r border-gray-300 px-4 py-2 w-2/3 bg-gray-50 text-xs">POLICY NO</th>
                              <th className="border-r border-gray-300 px-4 py-2 w-2/3 bg-gray-50 text-xs">SUM ASSURED</th>
                              <th className="px-2 py-1 w-1/6 bg-gray-50 text-xs">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            {policyRows.map((row, index) => (
                              <tr key={index}>
                                <td className="border-r border-gray-300 px-2 py-1">
                                  <input
                                    type="text"
                                    value={row.policyNo}
                                    onChange={(e) => handlePolicyInputChange(index, 'policyNo', e.target.value)}
                                    className="w-full border-gray-300 rounded"
                                  />
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1">
                                  <input
                                    type="number"
                                    readOnly
                                    value={row.sumAssured || ''} // Ensure it's tied to the individual row's sumAssured
                                    onChange={(e) => handlePolicyInputChange(index, 'sumAssured', e.target.value)}
                                    className="w-full border-gray-300 rounded"
                                  />
                                </td>
                                <td className="px-2 py-1 text-center">
                                  <button onClick={() => deletePolicyRow(index)} className="text-center bg-red-500 text-white px-2 py-1 rounded">X</button>
                                </td>
                              </tr>

                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-1">
                  <button
                    onClick={addPolicyRow}
                    className={`bg-green-500 text-white px-1 py-0 rounded ${!isAddButtonEnabled() ? 'opacity-30 cursor-not-allowed' : ''}`}
                    disabled={!isAddButtonEnabled()}
                  >
                    add+
                  </button>
                  <div className="flex items-center">
                    <label className="mr-2">Total Sum Assured:</label>
                    <input
                      type="number"
                      value={totalSumAssured}
                      readOnly
                      className="border-gray-400 rounded p-1 w-40 text-right"
                    />
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="text-center mt-2 mb-2">
            <button
              onClick={updateMedicalInfo}
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
      )
      }
      {selectedTopbarItem === "N" && (
        <div className="shadow-lg border lg:mx-48 mt-1 m-2">
          <div className="p-1 mb-0 grid grid-cols-1 lg:grid-cols-3 gap-0 w-full lg:mx-auto lg:mt-0 w-">
            <div className="col-span-2 text-start px-2">
              <div className="shadow border-2 rounded p-1 mt-2 mb-3">
                <h2 className="text-center font-bold text-success p-2 rounded text-xs text-dark">
                  NOMINEE INFO
                </h2>

                <div className="p-0 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-1 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                  <div className="grid grid-cols-4 justify-center align-items-center">
                    <div className="col-span-2 text-start px-2">
                      <label className="text-start text-xs">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleNomineeInputChange}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full uppercase"
                      />
                    </div>
                    <div className="text-start px-2">
                      <label className="text-start text-xs">RELATION</label>
                      <input
                        type="text"
                        name="relation"
                        value={formData.relation}
                        onChange={handleNomineeInputChange}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full uppercase"
                      />
                    </div>
                    <div className="text-start px-2">
                      <label className="text-start text-xs">PERCENTAGE</label>
                      <input
                        type="text"
                        name="percentage"
                        value={formData.percentage}
                        onChange={handleNomineeInputChange}
                        className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-1 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-4 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                  <div className="text-start px-2">
                    <label className="text-start text-xs">DOB</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">AGE</label>
                    <input
                      type="text"
                      name="age"
                      value={nomineeAge?.age[0] || formData.age || 0}
                      onChange={handleNomineeInputChange}
                      disabled
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">
                      ID TYPE
                    </label>
                    <select
                      name="idType"
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>SELECT ID TYPE</option>
                      {TypeList?.map((type, ii) => (
                        <option key={ii} value={type?.type_id}>
                          {type?.type_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">ID NO.</label>
                    <input
                      type="text"
                      name="idNo"
                      value={formData.idNo}
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                </div>
                <div className="p-1 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-4 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                  <div className="text-start px-2">
                    <label className="text-start text-xs">ACC NO</label>
                    <input
                      type="text"
                      name="accNo"
                      value={formData.accNo}
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>
                  <div className="text-start px-2">
                    <label className="text-start text-xs">MOBILE NO</label>
                    <input
                      type="text"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    />
                  </div>

                  <div className="text-start px-2">
                    <label className="text-center mt-3  text-sm  w-20">
                      BANK
                    </label>
                    <select
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                      name="nBankCode"
                    >
                      <option>SELECT BANK</option>
                      {bankList?.map((bank, i) => (
                        <option key={i} value={bank?.bank_code}>
                          {bank?.bank_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-start px-2">
                    <label className="text-center mt-3  text-sm  w-48">
                      BANK BRANCH
                    </label>
                    <select
                      name="routingNo"
                      onChange={handleNomineeInputChange}
                      className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    >
                      <option>SELECT BRANCH</option>
                      {nomineeBankbranchList?.map((branch, i) => (
                        <option key={i} value={branch?.routing_no}>
                          {branch?.branch_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional form fields similar to above, using formData and handleInputChange */}

              </div>
            </div>

            <div className="shadow border-2 rounded p-1 mt-2 mb-3">
              <h2 className="text-center font-bold text-success p-2 rounded text-xs text-dark">
                GUARDIAN
              </h2>

              <div className="p-0 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-3 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                <div className="col-span-2 text-start px-2">
                  <label className="text-start text-xs">Name</label>
                  <input
                    type="text"
                    name="guardianName"
                    onChange={handleNomineeInputChange}
                    value={formData.guardianName}
                    disabled={isGuardianDisabled}
                    className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full uppercase"
                  />
                </div>
                <div className="text-start px-2">
                  <label className="text-start text-xs">RELATION</label>
                  <input
                    type="text"
                    name="guardianRelation"
                    className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full uppercase"
                    onChange={handleNomineeInputChange}
                    value={formData.guardianRelation}
                    disabled={isGuardianDisabled}
                  />
                </div>
              </div>

              <div className="py-1 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                <div className="text-start px-2">
                  <label className="text-xs text-start w-44 mt-3 p-0">
                    AGE
                  </label>
                  <input
                    type="text"
                    name="guardianAge"
                    class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    onChange={handleNomineeInputChange}
                    value={formData.guardianAge}
                    disabled={isGuardianDisabled}
                  />
                </div>
                <div className="text-start px-2">
                  <label className="text-xs text-start w-16 mt-3 p-0">
                    GACC NO
                  </label>
                  <input
                    type="text"
                    name="guardianAccNo"
                    class="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    onChange={handleNomineeInputChange}
                    value={formData.guardianAccNo}
                    disabled={isGuardianDisabled}
                  />
                </div>
              </div>
              <div className="py-1 mb-0 grid grid-cols-1 rounded mt-0 lg:grid-cols-2 gap-0 w-full justify-center align-items-center lg:mx-auto lg:mt-0">
                <div className="text-start px-2">
                  <label className="text-center mt-3  text-sm  w-20">
                    GBANK NAME
                  </label>
                  <select
                    onChange={handleNomineeInputChange}
                    className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                    name="nBankCode"
                  >
                    <option>SELECT BANK</option>
                    {bankList?.map((bank, i) => (
                      <option key={i} value={bank?.bank_code}>
                        {bank?.bank_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-start px-2">
                  <label className="text-center mt-3  text-sm  w-48">
                    GBANK BRANCH
                  </label>
                  <select
                    name="routingNo"
                    onChange={handleNomineeInputChange}
                    className="form-input text-sm shadow border-[#E3F2FD] mt-0 w-full"
                  >
                    <option>SELECT BRANCH</option>
                    {nomineeBankbranchList?.map((branch, i) => (
                      <option key={i} value={branch?.routing_no}>
                        {branch?.branch_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>


          <div className="text-center">
            <button
              onClick={formData.slno !== '' ? handleNomineeInsert : handleNomineeUpdate}
              type="submit"
              className=" text-end btn-sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2 mt-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {
                formData.slno !== '' ? 'SAVE' : 'UPDATE'
              }
            </button>
          </div>
          <>
            {
              nomineeList?.data?.length !== 0 &&
              <div className="overflow-x-auto mt-2">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
                      <th className="py-3 px-6 text-left">NAME</th>
                      <th className="py-3 px-6 text-left">RELATION </th>
                      <th className="py-3 px-6 text-left">AGE</th>
                      <th className="py-3 px-6 text-left">ID NO</th>
                      <th className="py-3 px-6 text-left">PERCENTAGE</th>
                      <th className="py-3 px-6 text-left">MOBILE NO</th>
                      <th className="py-3 px-6 text-left">ACC NO</th>
                      <th className="py-3 px-6 text-left">GUARDIAN</th>
                      <th className="py-3 px-6 text-left">GRELATION</th>
                      <th className="py-3 px-6 text-left">GAGE</th>
                      <th className="py-3 px-6 text-left">GACC NO</th>
                      <th className="py-3 px-6 text-left">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                    {nomineeList?.data?.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.name}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.relation}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.age}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.nn_id_number}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.percentage}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.n_mobile_no}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.acc_no}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.guardian}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.grelation}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.gage}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">{row.gaccno}</td>
                        <td className="py-3 px-6 text-left whitespace-nowrap text-xl text-red-800 flex items-center space-x-2"> <FontAwesomeIcon
                          onClick={() => handleGetRowData(row)}
                          icon={faPenToSquare}
                          className="text-blue-500 cursor-pointer"
                        /><FontAwesomeIcon icon={faTrash} onClick={() => deleteNominee(row.slno)} className="text-red-600 cursor-pointer" /> </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          </>
        </div >

      )

      }


    </div>

  );
};

export default Index;
