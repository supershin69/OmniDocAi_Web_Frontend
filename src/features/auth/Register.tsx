import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";

function Register() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-2xl!">Create your account</FieldLegend>
            <FieldDescription>
              Make PDFs searchable, editable, and audible.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="David" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="david@gmail.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" required />
              </Field>
              <Field>
                <Button type="submit" className="py-5">
                  Create account
                </Button>
              </Field>
              <div className="flex justify-center items-center">
                <FieldDescription>
                  Already have an account?
                  <Link to="/login" className="text-primary no-underline!">
                    {" "}
                    Sign in
                  </Link>
                </FieldDescription>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
export default Register;
