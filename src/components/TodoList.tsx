import { Card } from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

const TodoList = () => {
  return (
    <div>
      Calendar
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
