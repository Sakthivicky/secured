'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function JoinWaitlist() {
const [step, setStep] = useState(1);
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
role: "",

name: "",
email: "",
phone: "",
area: "",
college_name: "",
year_of_study: "",
company: "",
job_role: "",
experience: "",
cybersecurity_level: "",
interests: [] as string[],
certifications: "",
linkedin: "",
additional_skills: [] as string[],
contribution_interest: [] as string[],
expectations: "",
heard_about_us: "",

});

const toggleArrayField = (
field: "interests" | "additional_skills" | "contribution_interest",
value: string
) => {
const current = formData[field];

if (current.includes(value)) {
  setFormData({
    ...formData,
    [field]: current.filter((item) => item !== value),
  });
} else {
  setFormData({
    ...formData,
    [field]: [...current, value],
  });
}

};

const handleSubmit = async () => {
try {
setLoading(true);

  const { error } = await supabase
    .from("waitlist")
    .insert([formData]);
  if (error) {
    alert(error.message);
    return;
  }
  setStep(5);
} catch (err) {
  console.error(err);
  alert("Something went wrong");
} finally {
  setLoading(false);
}

};

const Chip = ({
label,
field,
}: {
label: string;
field:
| "interests"
| "additional_skills"
| "contribution_interest";
}) => {
const active = formData[field].includes(label);

return (
  <button
    type="button"
    onClick={() => toggleArrayField(field, label)}
    className={`px-4 py-2 rounded-full border transition
      ${
        active
          ? "bg-yellow-500 text-white border-yellow-500"
          : "bg-white border-gray-300"
      }`}
  >
    {label}
  </button>
);

};

return (
  <div className="max-w-3xl mx-auto px-6 py-12">
    <div className="mb-8">
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-yellow-500 h-3 rounded-full"
          style={{
            width:
              step === 1
                ? "25%"
                : step === 2
                ? "50%"
                : step === 3
                ? "75%"
                : "100%",
          }}
        />
      </div>
    </div>
    {step === 1 && (
      <div className="bg-white p-8 rounded-3xl shadow">
        <h1 className="text-4xl font-bold mb-8">
          Who are you?
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => {
              setFormData({
                ...formData,
                role: "Student",
              });
              setStep(2);
            }}
            className="p-10 border rounded-3xl hover:border-yellow-500"
          >
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold">
              Student
            </h2>
          </button>
          <button
            onClick={() => {
              setFormData({
                ...formData,
                role: "Professional",
              });
              setStep(2);
            }}
            className="p-10 border rounded-3xl hover:border-yellow-500"
          >
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-2xl font-bold">
              Professional
            </h2>
          </button>
        </div>
      </div>
    )}
    {step === 2 && (
      <div className="bg-white p-8 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Basic Details
        </h2>
        <div className="space-y-4">
          <input
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          <input
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <input
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />
          <input
            placeholder="Area"
            className="w-full border p-4 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                area: e.target.value,
              })
            }
          />
        </div>
        <button
          onClick={() => setStep(3)}
          className="mt-6 bg-yellow-500 text-white px-8 py-3 rounded-xl"
        >
          Next
        </button>
      </div>
    )}
    {step === 3 && (
      <div className="bg-white p-8 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Cyber Profile
        </h2>
        {formData.role === "Student" ? (
          <div className="space-y-4">
            <input
              placeholder="College Name"
              className="w-full border p-4 rounded-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  college_name: e.target.value,
                })
              }
            />
            <input
              placeholder="Year of Study"
              className="w-full border p-4 rounded-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  year_of_study: e.target.value,
                })
              }
            />
          </div>
        ) : (
          <div className="space-y-4">
            <input
              placeholder="Company"
              className="w-full border p-4 rounded-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
            />
            <input
              placeholder="Job Role"
              className="w-full border p-4 rounded-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  job_role: e.target.value,
                })
              }
            />
            <input
              placeholder="Years of Experience"
              className="w-full border p-4 rounded-xl"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  experience: e.target.value,
                })
              }
            />
          </div>
        )}
        <button
          onClick={() => setStep(4)}
          className="mt-6 bg-yellow-500 text-white px-8 py-3 rounded-xl"
        >
          Next
        </button>
      </div>
    )}
    {step === 4 && (
      <div className="bg-white p-8 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Interests & Expectations
        </h2>
        <div className="mb-8">
          <h3 className="font-semibold mb-4">
            Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            <Chip field="interests" label="Web Security" />
            <Chip field="interests" label="Cloud Security" />
            <Chip field="interests" label="Bug Bounty" />
            <Chip field="interests" label="SOC" />
            <Chip field="interests" label="Mobile Security" />
            <Chip field="interests" label="GRC" />
          </div>
        </div>
        <textarea
          placeholder="What do you expect from SecUErd?"
          className="w-full border p-4 rounded-xl"
          rows={4}
          onChange={(e) =>
            setFormData({
              ...formData,
              expectations: e.target.value,
            })
          }
        />
        <input
          placeholder="LinkedIn Profile"
          className="w-full border p-4 rounded-xl mt-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              linkedin: e.target.value,
            })
          }
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 bg-yellow-500 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Submitting..." : "Join Waitlist"}
        </button>
      </div>
    )}
    {step === 5 && (
  <div className="bg-white p-10 rounded-3xl shadow text-center">
    <div className="text-7xl mb-6">
      🎉
    </div>

    <h2 className="text-4xl font-bold">
      Welcome to SecUErd
    </h2>

    <p className="mt-6 text-gray-600">
      Thank you for joining Erode's Cybersecurity Community.
    </p>

    <div className="mt-8">
      <button
        onClick={() => window.location.href = "/"}
        className="bg-yellow-500 text-white px-8 py-3 rounded-xl"
      >
        Back to Home
      </button>
    </div>
  </div>
)}
  </div>
);
}