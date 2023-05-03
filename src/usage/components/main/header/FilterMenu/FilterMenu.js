import { useEffect, useState } from "react";
import { Container, Button, Icon } from "./filter-menu-styles";

export function FilterMenu({ categories, onSelect }) {
    const [click, setClick] = useState(false);

    return (
        <Container>
            {categories.map((category) => (
                <Button
                    key={category.id}
                    onClick={(e) => {
                        onSelect(category);
                        if (e.type === "click") {
                        }
                    }}
                >
                    <Icon>ICON</Icon>
                    {category.label}
                </Button>
            ))}
        </Container>
    );
}
