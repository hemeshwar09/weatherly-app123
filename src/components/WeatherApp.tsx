import { Search, Cloud, Droplets, Wind, Sun, Gauge, Eye } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WeatherApp = () => {
  const currentWeather = {
    city: "London, UK",
    condition: "partly cloud",
    temperature: 28,
    feelsLike: 7,
    cloudCover: 8,
    rain: 2,
    humidity: 65,
    ultraviolet: 7,
    windSpeed: 26,
    date: "Saturday",
    dayTemp: 12,
    windTemp: 16
  };

  const otherCities = [
    { name: "Manchester", temp: 7 },
    { name: "Edinburgh", temp: 19 },
    { name: "Bristol", temp: 22 },
    { name: "York", temp: 20 }
  ];

  const sidebarItems = [
    { name: "Home", path: "/", active: true },
    { name: "Blogs", path: "/blogs", active: false },
    { name: "Map", path: "/map", active: false },
    { name: "Photos", path: "/photos", active: false },
    { name: "Videos", path: "/videos", active: false },
    { name: "Phone", path: "/phone", active: false }
  ];

  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 sidebar-glass p-6 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-weather-accent-purple to-weather-accent-pink flex items-center justify-center">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Weatherly</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-primary/20 text-primary border border-primary/30 glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="space-y-2">
          <Link
            to="/signin"
            className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block w-full text-center px-4 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for city..." 
              className="pl-10 glass-card border-0 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button className="ml-4 glass-card bg-gradient-to-r from-accent to-primary hover:opacity-90 border-0 text-primary-foreground">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Weather Display */}
          <div className="col-span-8">
            <div className="glass-card rounded-2xl p-8 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {currentWeather.city}
                  </h2>
                  <p className="text-muted-foreground">{currentWeather.condition}</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <p>{currentWeather.date}</p>
                  <p>Sun</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="text-6xl font-bold temp-gradient">
                    {currentWeather.temperature}°
                  </div>
                  <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="text-2xl font-semibold text-foreground">
                    {currentWeather.dayTemp}°
                  </div>
                  <div className="text-muted-foreground">
                    {currentWeather.date}
                  </div>
                  <div className="text-muted-foreground">Wind</div>
                  <div className="text-xl font-semibold text-foreground">
                    {currentWeather.windTemp}°
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Cards Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="weather-card rounded-xl p-6 text-center">
                <div className="text-muted-foreground mb-2">Feel like</div>
                <div className="text-2xl font-bold text-primary">
                  {currentWeather.feelsLike}°
                </div>
              </div>
              <div className="weather-card rounded-xl p-6 text-center">
                <div className="text-muted-foreground mb-2">Cloud</div>
                <div className="text-2xl font-bold text-accent">
                  {currentWeather.cloudCover}%
                </div>
              </div>
              <div className="weather-card rounded-xl p-6 text-center">
                <div className="text-muted-foreground mb-2">Rain</div>
                <div className="text-2xl font-bold text-secondary-foreground">
                  {currentWeather.rain}°
                </div>
              </div>
            </div>

            {/* Additional Weather Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="weather-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Humidity</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {currentWeather.humidity}%
                </div>
              </div>
              <div className="weather-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Ultraviolet</span>
                </div>
                <div className="text-2xl font-bold text-accent">
                  {currentWeather.ultraviolet}
                </div>
              </div>
              <div className="weather-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Wind className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-muted-foreground">Cloudy</span>
                </div>
                <div className="text-2xl font-bold text-secondary-foreground">
                  {currentWeather.windSpeed} km/h
                </div>
              </div>
            </div>
          </div>

          {/* Other Cities Sidebar */}
          <div className="col-span-4">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-foreground">Other Cities</h3>
                <button className="text-muted-foreground hover:text-foreground text-sm">
                  See More →
                </button>
              </div>
              
              <div className="space-y-4">
                {otherCities.map((city, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="text-foreground">{city.name}</span>
                    <span className="text-foreground font-semibold">{city.temp}°</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
