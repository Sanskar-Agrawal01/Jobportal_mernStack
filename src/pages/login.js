import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    signupConfirm: "",
    signupRole: "jobseeker" // Default role
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Check URL parameters for tab
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'signup') {
      setActiveTab('signup');
    }
  }, [location]);

  // Simulated user database
  const [users, setUsers] = useState([
    { email: "test@example.com", password: "password123", name: "Test User", role: "jobseeker" }
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validate email
    if (!formData.loginEmail || !validateEmail(formData.loginEmail)) {
      newErrors.loginEmail = "Please enter a valid email address";
    }
    
    // Validate password
    if (!formData.loginPassword) {
      newErrors.loginPassword = "Password is required";
    }
    
    setErrors(newErrors);
    
    // If no errors, process login
    if (Object.keys(newErrors).length === 0) {
      const user = users.find(
        u => u.email === formData.loginEmail && u.password === formData.loginPassword
      );
      
      if (user) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify({
          name: user.name,
          email: user.email,
          role: user.role
        }));
        
        setSuccessMessage(`Welcome back, ${user.name}!`);
        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        // Check if email exists
        const emailExists = users.some(u => u.email === formData.loginEmail);
        
        if (emailExists) {
          setErrors({ loginPassword: "Incorrect password" });
        } else {
          // Show signup prompt
          setShowSignupPrompt(true);
        }
      }
    }
  };

  const handleSignupPrompt = (shouldSignup) => {
    setShowSignupPrompt(false);
    if (shouldSignup) {
      setActiveTab("signup");
      setFormData({
        ...formData,
        signupEmail: formData.loginEmail,
        loginEmail: "",
        loginPassword: ""
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validate name
    if (!formData.signupName) {
      newErrors.signupName = "Name is required";
    }
    
    // Validate email
    if (!formData.signupEmail || !validateEmail(formData.signupEmail)) {
      newErrors.signupEmail = "Please enter a valid email address";
    } else if (users.some(u => u.email === formData.signupEmail)) {
      newErrors.signupEmail = "Email already registered. Please login instead";
    }
    
    // Validate password
    if (!formData.signupPassword || formData.signupPassword.length < 8) {
      newErrors.signupPassword = "Password must be at least 8 characters";
    }
    
    // Validate confirm password
    if (formData.signupPassword !== formData.signupConfirm) {
      newErrors.signupConfirm = "Passwords do not match";
    }
    
    setErrors(newErrors);
    
    // If no errors, process signup
    if (Object.keys(newErrors).length === 0) {
      const newUser = {
        name: formData.signupName,
        email: formData.signupEmail,
        password: formData.signupPassword,
        role: formData.signupRole
      };
      
      setUsers([...users, newUser]);
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }));
      
      setSuccessMessage("Account created successfully!");
      
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Signup Prompt Modal */}
        {showSignupPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4">Account Not Found</h3>
              <p className="mb-6">Would you like to sign up with this email?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleSignupPrompt(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSignupPrompt(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "login" 
                ? "border-b-2 border-blue-500 text-blue-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("login");
              setErrors({});
              setSuccessMessage("");
            }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "signup" 
                ? "border-b-2 border-blue-500 text-blue-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("signup");
              setErrors({});
              setSuccessMessage("");
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6">
          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.loginEmail ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your email"
                  value={formData.loginEmail}
                  onChange={handleInputChange}
                />
                {errors.loginEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.loginEmail}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="loginPassword" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.loginPassword ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your password"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                />
                {errors.loginPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.loginPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Login
              </button>
              <div className="text-center mt-4">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot your password?
                </a>
              </div>
            </form>
          )}

          {/* Signup Form */}
          {activeTab === "signup" && (
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label htmlFor="signupName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="signupName"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.signupName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your full name"
                  value={formData.signupName}
                  onChange={handleInputChange}
                />
                {errors.signupName && (
                  <p className="text-red-500 text-sm mt-1">{errors.signupName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="signupEmail" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.signupEmail ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your email"
                  value={formData.signupEmail}
                  onChange={handleInputChange}
                />
                {errors.signupEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.signupEmail}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="signupRole" className="block text-gray-700 font-medium mb-2">
                  Role
                </label>
                <select
                  id="signupRole"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={formData.signupRole}
                  onChange={handleInputChange}
                >
                  <option value="jobseeker">Job Seeker</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="signupPassword" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.signupPassword ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Create a password"
                  value={formData.signupPassword}
                  onChange={handleInputChange}
                />
                {errors.signupPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.signupPassword}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="signupConfirm" className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="signupConfirm"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.signupConfirm ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Confirm your password"
                  value={formData.signupConfirm}
                  onChange={handleInputChange}
                />
                {errors.signupConfirm && (
                  <p className="text-red-500 text-sm mt-1">{errors.signupConfirm}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}