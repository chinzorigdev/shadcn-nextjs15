"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Card className="w-full max-w-sm mx-auto my-10 ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid gap-2 ">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-xl mx-auto my-10">
        <CardHeader>
          <CardTitle>Alert will be here</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Alert>
            <CheckCircle2Icon className="h-4 w-4" />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
          <Alert>
            <PopcornIcon />
            <AlertTitle>
              This alert has a title and an icon. No description
            </AlertTitle>
          </Alert>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm mx-auto my-10 ">
        <CardHeader>
          <CardTitle>Alert dailog</CardTitle>
          <CardDescription>Alert dailog will be here</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dailog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure!</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm mx-auto my-10 ">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
          <CardDescription>Avatar</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap items-center gap-12">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar className="rounded-lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm mx-auto my-10 ">
        <CardHeader>
          <CardTitle>Badge</CardTitle>
          <CardDescription>Badge</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          <div className="flex w-full flex-wrap gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex w-full flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              <BadgeCheckIcon />
              Verified
            </Badge>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
              8
            </Badge>
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
              variant="destructive"
            >
              99
            </Badge>
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
              variant="outline"
            >
              20+
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm mx-auto my-10">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Calendar</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </CardContent>
      </Card>
    </div>
  );
}
