import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Video, Mic, MicOff, VideoOff, ScreenShare, MessageSquare, Users, Calendar, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Collaboration = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Collaborate</h2>
        <p className="text-muted-foreground">Connect and work together seamlessly</p>
      </div>

      {/* Active Meeting */}
      <Card className="p-6 border-primary/50 bg-primary/5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-xl font-bold">Team Design Review</h3>
              <Badge>Live Now</Badge>
            </div>
            <p className="text-muted-foreground">5 participants • Started 12 minutes ago</p>
          </div>
          <Button size="lg">Join Meeting</Button>
        </div>
        
        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/20">AM</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/20">SK</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/20">TL</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/20">+2</AvatarFallback>
          </Avatar>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Virtual Meeting Space */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Video size={20} className="text-primary" />
            Virtual Meetings
          </h3>
          
          {/* Mock Meeting Interface */}
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                <div className="bg-muted rounded-lg flex items-center justify-center">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/20 text-lg">AM</AvatarFallback>
                  </Avatar>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/20 text-lg">SK</AvatarFallback>
                  </Avatar>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center col-span-2">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Live Transcription */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Live Transcription</p>
                <p className="text-sm">"Let's review the wireframes for the new dashboard..."</p>
              </div>
            </div>

            {/* Meeting Controls */}
            <div className="flex items-center justify-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <Mic size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <Video size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12">
                <ScreenShare size={20} />
              </Button>
              <Button size="icon" variant="destructive" className="rounded-full w-12 h-12">
                <VideoOff size={20} />
              </Button>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground space-y-1">
              <p>✓ Automatic transcription in 40+ languages</p>
              <p>✓ Real-time translation available</p>
              <p>✓ AI meeting summary generated</p>
            </div>
          </div>
        </Card>

        {/* Team Chat */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-primary" />
            Team Messages
          </h3>
          
          <div className="space-y-3 mb-4 h-[300px] overflow-y-auto">
            <div className="flex gap-3">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className="bg-primary/20 text-xs">AM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">Alex Morgan</span>
                  <span className="text-xs text-muted-foreground">10:24 AM</span>
                </div>
                <p className="text-sm bg-muted rounded-lg p-2">
                  Just shared the updated design mockups in the project folder
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className="bg-primary/20 text-xs">SK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">Sarah Kim</span>
                  <span className="text-xs text-muted-foreground">10:26 AM</span>
                </div>
                <p className="text-sm bg-muted rounded-lg p-2">
                  Looks great! The color scheme really pops 🎨
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-muted-foreground">10:28 AM</span>
                  <span className="font-semibold text-sm">You</span>
                </div>
                <p className="text-sm bg-primary text-primary-foreground rounded-lg p-2 inline-block">
                  Thanks! Can we schedule a quick call to discuss the navigation?
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon">
              <Send size={18} />
            </Button>
          </div>
        </Card>
      </div>

      {/* Upcoming Collaboration Sessions */}
      <div>
        <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
        <div className="grid gap-4">
          <Card className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Calendar className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Weekly Team Standup</h4>
              <p className="text-sm text-muted-foreground">Tomorrow at 9:00 AM • 30 min</p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary/20 text-xs">+8</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Product Roadmap Planning</h4>
              <p className="text-sm text-muted-foreground">Friday at 2:00 PM • 1 hour</p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary/20 text-xs">+5</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Async Collaboration Tools */}
      <Card className="p-6 bg-gradient-subtle">
        <h3 className="text-lg font-bold mb-3">Asynchronous Collaboration</h3>
        <p className="text-muted-foreground mb-4">
          Work together without being online at the same time
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-sm">
            <div className="font-semibold mb-1">Shared Documents</div>
            <p className="text-muted-foreground">Real-time collaborative editing</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-1">Video Messages</div>
            <p className="text-muted-foreground">Record and share updates</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-1">Task Boards</div>
            <p className="text-muted-foreground">Track progress together</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Collaboration;
