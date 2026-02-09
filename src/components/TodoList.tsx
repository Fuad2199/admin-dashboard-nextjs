"use client";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/shared/components/ui/calendar";

const TodoList = () => {
  const [date, setData] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="default" className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
                setData(date)
                setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-100 mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="felx items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                className="pl-2 text-sm text-muted-foreground"
                htmlFor="item1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
