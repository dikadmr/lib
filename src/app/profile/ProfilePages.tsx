import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Lock, Phone, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
};

const ProfilePages = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "aw A",
    email: "awa@gmail.com",
    phone: "084",
    role: "Scene Police",
    avatar: "/images/loginbg.png",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [phone, setPhone] = useState(profileData.phone);
  const [email, setEmail] = useState(profileData.email);

  const navigate = useNavigate();
  const username = localStorage.getItem("lib_username");

  const { setLoggedIn } = useAuth();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to update the password
    alert("Password updated successfully!");
    setPassword({ current: "", new: "", confirm: "" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      email,
      phone,
    });
    alert("Contact information updated successfully!");
  };

  const handleLogOut = () => {
    localStorage.removeItem("TokenLogin");
    localStorage.removeItem("lib_username");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="container px-2 mx-auto flex flex-col min-h-screen py-8 md:py-16">
      <div className="">
        <h1 className="font-bold text-2xl">Profile</h1>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* User Profile Card - Fixed width and position */}
              <div className="md:w-64 md:sticky md:top-24 md:self-start">
                <Card className="rounded-lg shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <img
                        src={profileData.avatar}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                      />
                      <h2 className="text-xl font-bold">{username}</h2>
                      <p className="text-gray-500">{profileData.role}</p>
                    </div>
                    <Button className="w-full mt-4" onClick={handleLogOut}>
                      LogOut
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column containing User Data and Change Password stacked vertically */}
              <div className="flex-1 flex flex-col gap-6">
                {/* User Data Card */}
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>
                      <h3 className="text-lg font-medium flex items-center">
                        <User size={18} className="mr-2" />
                        User Information
                      </h3>
                    </CardTitle>
                  </CardHeader>
                  <Separator />
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">
                            Full Name
                          </h3>
                          <p className="text-base">{profileData.name}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">
                            Email Address
                          </h3>
                          <p className="text-base">{profileData.email}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">
                            Phone Number
                          </h3>
                          <p className="text-base">{profileData.phone}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">
                            Role
                          </h3>
                          <p className="text-base">{profileData.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Change Password Card - Now below User Data Card */}
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>
                      <h3 className="text-lg font-medium flex items-center">
                        <Settings size={18} className="mr-2" />
                        Settings
                      </h3>
                    </CardTitle>
                  </CardHeader>
                  <Separator />
                  <CardContent>
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <Lock size={18} className="mr-2" />
                        Change Password
                      </h3>
                      <div className="mb-8">
                        <form
                          onSubmit={handlePasswordSubmit}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Current Password
                            </label>
                            <Input
                              type="password"
                              value={password.current}
                              placeholder="your current password"
                              onChange={(e) =>
                                setPassword({
                                  ...password,
                                  current: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              New Password
                            </label>
                            <Input
                              type="password"
                              value={password.new}
                              placeholder="your new password"
                              onChange={(e) =>
                                setPassword({
                                  ...password,
                                  new: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Confirm New Password
                            </label>
                            <Input
                              type="password"
                              value={password.confirm}
                              placeholder="confirm your new password"
                              onChange={(e) =>
                                setPassword({
                                  ...password,
                                  confirm: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            className="bg-emerald-800 cursor-pointer"
                          >
                            Update Password
                          </Button>
                        </form>
                      </div>

                      <Separator className="my-6" />

                      <div>
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <Phone size={18} className="mr-2" />
                          Contact Information
                        </h3>

                        <form
                          onSubmit={handleContactSubmit}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <Input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <Button
                            type="submit"
                            className="bg-emerald-800 cursor-pointer hover:bg-red-500"
                          >
                            Update Contact Info
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;
