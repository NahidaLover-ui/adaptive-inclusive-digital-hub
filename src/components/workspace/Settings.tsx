import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Eye, Palette, Globe, Bell, Lock } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Settings</h2>
        <p className="text-muted-foreground">Customize your adaptive workspace experience</p>
      </div>

      <Tabs defaultValue="accessibility" className="space-y-6">
        <TabsList>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="accessibility" className="space-y-6">
          {/* Voice Commands */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mic className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Voice Commands</h3>
                <p className="text-muted-foreground">Control the workspace using your voice</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="voice-enabled">Enable Voice Commands</Label>
                  <p className="text-sm text-muted-foreground">Use "Hey Workspace" to activate</p>
                </div>
                <Switch id="voice-enabled" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="voice-navigation">Voice Navigation</Label>
                  <p className="text-sm text-muted-foreground">Navigate between sections</p>
                </div>
                <Switch id="voice-navigation" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="voice-dictation">Voice Dictation</Label>
                  <p className="text-sm text-muted-foreground">Dictate messages and notes</p>
                </div>
                <Switch id="voice-dictation" />
              </div>
            </div>
          </Card>

          {/* Visual Accessibility */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Eye className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Visual Accessibility</h3>
                <p className="text-muted-foreground">Adjust display for better readability</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="high-contrast">High Contrast Mode</Label>
                  <p className="text-sm text-muted-foreground">Increase color contrast</p>
                </div>
                <Switch id="high-contrast" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="large-text">Large Text</Label>
                  <p className="text-sm text-muted-foreground">Increase default font size</p>
                </div>
                <Switch id="large-text" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="screen-reader">Screen Reader Support</Label>
                  <p className="text-sm text-muted-foreground">Optimize for screen readers</p>
                </div>
                <Switch id="screen-reader" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reduce-motion">Reduce Motion</Label>
                  <p className="text-sm text-muted-foreground">Minimize animations</p>
                </div>
                <Switch id="reduce-motion" />
              </div>
            </div>
          </Card>

          {/* Gesture Controls */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Gesture Controls</h3>
            <p className="text-muted-foreground mb-4">Use hand gestures to navigate (webcam required)</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="gesture-enabled">Enable Gesture Controls</Label>
                  <p className="text-sm text-muted-foreground">Control with hand movements</p>
                </div>
                <Switch id="gesture-enabled" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          {/* Theme */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Palette className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Theme & Colors</h3>
                <p className="text-muted-foreground">Customize the look and feel</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="mb-3 block">Color Theme</Label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-4 rounded-lg border-2 border-primary bg-card hover:bg-muted transition-colors">
                    <div className="w-full aspect-video rounded bg-gradient-primary mb-2" />
                    <p className="text-sm font-medium">Default</p>
                  </button>
                  <button className="p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors">
                    <div className="w-full aspect-video rounded bg-gradient-to-br from-purple-500 to-pink-500 mb-2" />
                    <p className="text-sm font-medium">Purple</p>
                  </button>
                  <button className="p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors">
                    <div className="w-full aspect-video rounded bg-gradient-to-br from-green-500 to-emerald-500 mb-2" />
                    <p className="text-sm font-medium">Green</p>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark color scheme</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-theme">Auto Theme</Label>
                  <p className="text-sm text-muted-foreground">Match system settings</p>
                </div>
                <Switch id="auto-theme" defaultChecked />
              </div>
            </div>
          </Card>

          {/* Language */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Language & Region</h3>
                <p className="text-muted-foreground">Set your preferred language</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Display Language</Label>
                <select className="w-full mt-2 p-2 rounded-lg border border-border bg-background">
                  <option>English (US)</option>
                  <option>Español</option>
                  <option>Français</option>
                  <option>Deutsch</option>
                  <option>日本語</option>
                  <option>中文</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-translate">Auto-Translate Content</Label>
                  <p className="text-sm text-muted-foreground">Translate learning materials</p>
                </div>
                <Switch id="auto-translate" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Bell className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Notification Preferences</h3>
                <p className="text-muted-foreground">Control how you receive updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="learning-reminders">Learning Reminders</Label>
                  <p className="text-sm text-muted-foreground">Daily study suggestions</p>
                </div>
                <Switch id="learning-reminders" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="break-reminders">Break Reminders</Label>
                  <p className="text-sm text-muted-foreground">Well-being notifications</p>
                </div>
                <Switch id="break-reminders" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="meeting-alerts">Meeting Alerts</Label>
                  <p className="text-sm text-muted-foreground">Upcoming session reminders</p>
                </div>
                <Switch id="meeting-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="achievement-alerts">Achievement Alerts</Label>
                  <p className="text-sm text-muted-foreground">Milestone celebrations</p>
                </div>
                <Switch id="achievement-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-digest">Email Digest</Label>
                  <p className="text-sm text-muted-foreground">Weekly summary email</p>
                </div>
                <Switch id="email-digest" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Lock className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Privacy & Data</h3>
                <p className="text-muted-foreground">Manage your data and privacy settings</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ai-personalization">AI Personalization</Label>
                  <p className="text-sm text-muted-foreground">Use my data to personalize content</p>
                </div>
                <Switch id="ai-personalization" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <p className="text-sm text-muted-foreground">Help improve the platform</p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">Show my progress to peers</p>
                </div>
                <Switch id="profile-visibility" />
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Clear Learning History
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
